# مرمری (Marmari) — ERP Backend

A comprehensive **Enterprise Resource Planning (ERP) backend** built with **NestJS 11**, **TypeORM**, and **PostgreSQL 16**. Designed as a modular monolith serving as the modern successor to the legacy Sepideh Jam accounting system.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Architecture Overview](#architecture-overview)
- [Modules](#modules)
  - [Financial Core](#financial-core)
  - [Supply Chain & Logistics](#supply-chain--logistics)
  - [Production & Quality](#production--quality)
  - [Human Resources](#human-resources)
  - [CRM & Sales](#crm--sales)
  - [Operations & Fleet](#operations--fleet)
  - [Reporting & Analytics](#reporting--analytics)
  - [Cross-Cutting & Infrastructure](#cross-cutting--infrastructure)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Authentication & Authorization](#authentication--authorization)
- [Database](#database)
- [Docker Deployment](#docker-deployment)
- [CI/CD](#cicd)
- [Testing](#testing)
- [Creating a New Module](#creating-a-new-module)
- [Environment Variables](#environment-variables)

---

## Tech Stack

| Layer           | Technology                                              |
| --------------- | ------------------------------------------------------- |
| **Runtime**     | Node.js 22, TypeScript 5.7                              |
| **Framework**   | NestJS 11 (strict mode)                                 |
| **Database**    | PostgreSQL 16 (multi-schema), TypeORM 1.0               |
| **Cache**       | Redis 7 via ioredis                                     |
| **Search**      | Elasticsearch 8.12 via `@nestjs/elasticsearch`          |
| **Queue**       | Bull (Redis-backed job queue)                           |
| **Realtime**    | Socket.IO (WebSocket gateway)                           |
| **GraphQL**     | Apollo Server (code-first)                              |
| **Auth**        | JWT (passport-jwt) + RBAC (roles + granular permissions)|
| **Validation**  | class-validator + class-transformer                     |
| **Documentation**| Swagger / OpenAPI (via `@nestjs/swagger`)              |
| **Metrics**     | prom-client (Prometheus metrics)                        |
| **Testing**     | Jest (unit + E2E)                                       |
| **Container**   | Docker, Docker Compose                                  |
| **CI/CD**       | GitHub Actions (lint → build → test → docker push)      |

---

## Architecture Overview

Marmari follows a **modular monolith** architecture:

- Each business domain is a self-contained NestJS **module** with its own entity, service, controller, DTOs, and barrel export.
- Modules communicate through service classes (not event-driven — kept intentionally simple).
- A generic **`CrudService<T>`** base class provides standard CRUD operations (findAll, findOne, create, update, remove, softDelete, paginate) — domain services extend it.
- The database uses **PostgreSQL schemas** for multi-tenancy and legacy data access: the `searchPath` connects to all four legacy schemas plus `public` for modern entities.
- Global guards (JwtAuthGuard → RolesGuard → PermissionsGuard) are chained in order, applied to every endpoint unless marked `@Public()`.
- A **SchemaInterceptor** resolves the target PostgreSQL schema from the request path for multi-tenant data isolation.

---

## Modules

47 modules in total: **38 domain modules** + **9 cross-cutting/infrastructure modules**.

### Financial Core

| Module | Entities | Key Features |
|---|---|---|
| **Accounts** | Account, AccountType | Chart of accounts, debit/credit/balance tracking, account types by category (asset/liability/equity/income/expense) |
| **Vouchers** | Voucher, VoucherItem, VoucherType | Journal entries, debit/credit validation, state machine (draft→confirmed→approved→rejected), transactional creation with items |
| **Banking** | Bank, BankAccount | Bank master data, account links |
| **Tax** | TaxTable, TaxTableItem | Tax rate tables, calculation by percentage |
| **Treasury** | Treasury, TreasuryTransaction | Cash/bank/credit tracking, deposit/withdraw/transfer workflows |
| **Currency** | Currency, CurrencyRate | Multi-currency support, base currency, rate management |
| **Budgets** | Budget, BudgetItem | Budget planning with nested items, activate/close workflow |
| **Cost Centers** | CostCenter | Cost center assignments, active filtering |
| **Pricing** | PriceList, PriceListItem | Multi-currency pricing, discount support, auto-calculated final price |
| **Invoicing** | Invoice, InvoiceItem | Sales/purchase/return invoices, item-level tax/discount, issue/paid/cancel workflow |

### Supply Chain & Logistics

| Module | Entities | Key Features |
|---|---|---|
| **Products** | Product | Product catalog with low-stock queries |
| **Inventory** | Warehouse, Inventory, InventoryDocument, InventoryDocumentItem | Multi-warehouse stock, document-based adjustments, transactional confirmation |
| **Purchase Orders** | PurchaseOrder, PurchaseOrderItem | Procurement workflow, approve/cancel/receive with auto-inventory increment |
| **Sales Orders** | SalesOrder, SalesOrderItem | Order-to-ship pipeline, confirm/ship/cancel with auto-stock deduction |
| **Transfers** | Transfer | Inter-account balance transfers, transactional execute/cancel |
| **Contracts** | Contract, ContractItem | Purchase/sales/service/lease contracts, activate/complete/terminate/cancel |
| **Transport** | Transport | Road/air/sea/rail shipments, carrier management, in-transit tracking, status state machine |

### Production & Quality

| Module | Entities | Key Features |
|---|---|---|
| **BOM** | BOM, BOMItem | Bill of Materials, cost calculation (sum of purchasePrice × qty × (1 + wastePercent)), workflow management |
| **Work Centers** | WorkCenter | Production centers with capacity, efficiency, cost-per-hour tracking |
| **Work Orders** | WorkOrder, WorkOrderOperation | Production orders with priority, operation sequencing, status workflow (draft→planned→in_progress→completed/cancelled/on_hold) |
| **Quality** | QualityCheck, QualityCheckItem | Incoming/in_process/final/shipping inspections, auto pass/fail status |
| **Maintenance** | MaintenanceSchedule, MaintenanceTask | Preventive/corrective/emergency maintenance, scheduling, task assignment |
| **Subcontracting** | SubcontractOrder, SubcontractOrderItem, SubcontractMaterial | Outsourced production/services, material tracking (sent/used/returned/wasted), full workflow |
| **Fixed Assets** | AssetCategory, Asset | Asset register, straight-line & declining-balance depreciation, disposal |

### Human Resources

| Module | Entities | Key Features |
|---|---|---|
| **HR** | Department, Employee | Hierarchical departments, employee management, termination |
| **Attendance** | AttendanceRecord, LeaveRequest | Daily check-in/out, leave management (annual/sick/personal/maternity), approval workflow |
| **Payroll** | PayrollPeriod, PayrollItem | Period-based payroll, auto-calculated netPay (base + allowances + overtime + bonus − deductions − tax − insurance − loan) |
| **Training** | TrainingCourse, TrainingSession, TrainingAttendance | Internal/external/online courses, session scheduling, attendance tracking |

### CRM & Sales

| Module | Entities | Key Features |
|---|---|---|
| **Parties** | Party | Customer/supplier management with dedicated endpoints |
| **CRM** | Campaign, Visit | Marketing campaigns (planned→active→paused→completed/cancelled), field visit tracking per party/user |
| **POS** | PosSession, PosOrder, PosPayment | Point-of-Sale sessions, orders with JSONB items & auto-totals, payment validation (cash/card/credit/check), void/refund |

### Operations & Fleet

| Module | Entities | Key Features |
|---|---|---|
| **Fleet** | Vehicle, FuelLog, MaintenanceLog | Vehicle registry, fuel consumption logging, maintenance scheduling, insurance/inspection expiry alerts |
| **Cheques** | Cheque | Cheque register with status state machine (issued→deposited→cashed/bounced) |

### Reporting & Analytics

| Module | Entities | Key Features |
|---|---|---|
| **Reports** | ReportDefinition, ReportExecution | **10 predefined reports** via raw SQL (trial balance, P&L, balance sheet, sales/purchase summary, inventory status, customer aging, account balances, vouchers by date, product stock), async execution with history |
| **Dashboards** | Dashboard, DashboardWidget | Customizable dashboards with chart/table/metric/KPI/report widgets, drag-and-drop layout (JSONB), widget position management |
| **Audit** | AuditLog | Automatic entity change tracking (entityType, entityId, action, userId, old/newValues), filtered paginated queries |

### Cross-Cutting & Infrastructure

| Module | Purpose |
|---|---|
| **Auth** | JWT-based authentication (register/login/profile), Passport strategy, token generation with refresh |
| **Users** | User management with role assignment (admin/manager/finance/sales/inventory/hr/user) |
| **Files** | File upload/download (local disk), Multer integration, entity-attachment support |
| **Search** | Elasticsearch integration — auto-index creation, multi-field fuzzy search with highlighting |
| **Jobs** | Bull queue backed by Redis — async processing for email, report export, webhook, document indexing, temp cleanup |
| **Notifications** | Socket.IO gateway — room-based real-time notifications (user-scoped, broadcast, channel) |
| **GraphQL** | Apollo Server with code-first schema — `User` queries/resolvers, playground at `/api/v1/graphql` |
| **Integration** | External API stubs: tax inquiry/submission, bank account verification/transfer, SMS send/bulk |

---

## Cross-Cutting Infrastructure

| Layer | Implementation |
|---|---|
| **Cache** | `CacheService` wrapping ioredis: get/set/del/delPattern/reset, auto-JSON serialization, configurable TTL |
| **i18n** | `I18nService`: JSON translation files (fa.json, en.json), flat key resolution, fallback chain, default Persian locale |
| **Logger** | `AppLogger`: structured console logger with timestamp/level/context, NestJS `LoggerService` interface |
| **Metrics** | `MetricsService` wrapping prom-client: Counter (HTTP requests), Histogram (request duration), Gauge (active users) |
| **Health** | `HealthController` (`GET /api/v1/health`): Redis connectivity check via Terminus |
| **Config** | NestJS ConfigModule with typed loaders: app, database, jwt, redis, storage |

---

## Getting Started

### Prerequisites

- **Node.js** 22+
- **npm** 10+
- **PostgreSQL** 16 (or Docker)
- **Redis** 7 (or Docker)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd marmari

# Install dependencies
npm ci

# Copy environment file
cp .env.example .env
# Edit .env with your database credentials
```

### Running with Docker (recommended for dev)

```bash
docker compose up -d
```

This starts PostgreSQL 16, Redis 7, Elasticsearch 8.12, and the API server.

### Running natively

```bash
# Start dependencies (PostgreSQL + Redis must be running)
npm run start:dev
```

The API will be available at `http://localhost:3000/api`.

---

## API Documentation

Swagger UI is available at **`/api/docs`** when the server is running.

The API is versioned using URI prefix:

```
/api/v1/accounts
/api/v1/vouchers
/api/v1/users
...
```

Default version is `v1`. All endpoints require JWT authentication unless marked with `@Public()`.

### Authentication Flow

1. **POST `/api/v1/auth/register`** — Create a new user account
2. **POST `/api/v1/auth/login`** — Obtain JWT access + refresh tokens
3. Include `Authorization: Bearer <token>` in subsequent requests

---

## Project Structure

```
src/
├── main.ts                      # Bootstrap: versioning, Swagger, CORS, ValidationPipe
├── app.module.ts                # Root module: wires all 47 modules + global guards/filters/interceptors
├── app.controller.ts            # Root health controller
│
├── auth/                        # JWT auth, RBAC permissions, guards
│   ├── permissions.ts           # Permission enum (40+ granular) + RolePermissions map
│   ├── permissions.guard.ts     # @RequirePermission() guard
│   ├── require-permission.decorator.ts
│
├── cache/                       # Redis cache wrapper (ioredis)
│   ├── cache.service.ts
│   ├── cache.module.ts
│   ├── redis.provider.ts
│
├── common/                      # Shared utilities
│   ├── decorators/              # @Public, @Roles, @CurrentUser
│   ├── dto/                     # PaginationDto
│   ├── filters/                 # AllExceptionsFilter
│   ├── guards/                  # JwtAuthGuard, RolesGuard
│   ├── interceptors/            # TransformInterceptor
│
├── config/                      # NestJS ConfigModule loaders
│   ├── app.config.ts
│   ├── database.config.ts
│   ├── jwt.config.ts
│   ├── redis.config.ts
│   ├── storage.config.ts
│
├── core/                        # Core framework
│   ├── crud.service.ts          # Generic CRUD + pagination base class
│   ├── crud.service.spec.ts
│
├── database/                    # TypeORM multi-schema connection
│   ├── database.module.ts
│   ├── data-source.ts           # CLI DataSource for migrations
│   ├── schema.interceptor.ts    # Multi-tenancy by schema resolution
│   ├── seed.service.ts          # Auto-creates 4 seed users on first boot
│   ├── entities/
│   │   └── base.entity.ts       # UUID PK, timestamps, soft-delete, version
│   └── migrations/
│       └── 1740000000000-InitialMigration.ts
│
├── health/                      # Health check endpoint
│   ├── health.controller.ts
│   ├── health.service.ts
│   ├── health.module.ts
│
├── i18n/                        # Internationalization
│   ├── i18n.service.ts
│   ├── fa.json, en.json
│
├── logger/                      # Structured logging
│   ├── app-logger.service.ts
│   ├── logger.module.ts
│
├── metrics/                     # Prometheus metrics
│   ├── metrics.service.ts
│   ├── metrics.module.ts
│
└── modules/                     # Domain modules (38 total)
    ├── accounts/
    ├── attendance/
    ├── audit/
    ├── auth/
    ├── banking/
    ├── bom/
    ├── budgets/
    ├── cheques/
    ├── contracts/
    ├── cost-centers/
    ├── crm/
    ├── currency/
    ├── dashboards/
    ├── files/
    ├── fixed-assets/
    ├── fleet/
    ├── graphql/
    ├── hr/
    ├── integration/
    ├── inventory/
    ├── invoicing/
    ├── jobs/
    ├── maintenance/
    ├── notifications/
    ├── parties/
    ├── payroll/
    ├── pos/
    ├── pricing/
    ├── products/
    ├── purchase-orders/
    ├── quality/
    ├── reports/
    ├── sales-orders/
    ├── search/
    ├── subcontracting/
    ├── tax/
    ├── training/
    ├── transfers/
    ├── transport/
    ├── treasury/
    ├── users/
    ├── vouchers/
    ├── workcenters/
    └── workorders/
```

Each domain module follows a consistent structure:

```
module-name/
├── module-name.controller.ts
├── module-name.service.ts
├── module-name.module.ts
├── index.ts
├── dto/
│   └── create-*.ts
└── entities/
    ├── entity-one.entity.ts
    └── entity-two.entity.ts
```

---

## Authentication & Authorization

Three layers of guards are applied globally (in order):

1. **JwtAuthGuard** — Validates the JWT token from the `Authorization` header. All routes require a valid token unless decorated with `@Public()`.
2. **RolesGuard** — Checks user role against `@Roles()` decorator. Uses `UserRole` enum (admin, manager, finance, sales, inventory, hr, user).
3. **PermissionsGuard** — Checks granular permissions using `@RequirePermission()` decorator. Uses the `Permission` enum with 40+ entries (e.g., `account:create`, `voucher:confirm`, `report:export`).

```typescript
@Roles(UserRole.ADMIN, UserRole.FINANCE)
@RequirePermission(Permission.VOUCHER_CONFIRM)
@Patch(':id/confirm')
confirm(@Param('id') id: string) { ... }
```

The `RolePermissions` map assigns permission sets to each role:
- **super_admin** — `*` (all permissions)
- **admin** — Full CRUD on all entities
- **manager** — Operational permissions (create, read, confirm, ship, receive)
- **user** — Read-only + basic create

---

## Database

### Connection

TypeORM connects to the `superapp` database with `searchPath` pointing to four legacy schemas plus `public`:

```typescript
extra: {
  searchPath: 'sepidejam_reportserver, sepidejam_reportservertempdb, sepidejam_sepidejam_sg3, sepidejam_taxpayersepidehjam, public',
}
```

New entities are created in the `public` schema using the `@Entity('table_name', { schema: 'public' })` decorator.

### Base Entity

All entities extend `BaseEntity` which provides:
- `id: string` — UUID primary key (auto-generated)
- `createdAt: Date` — Auto-set on creation
- `updatedAt: Date` — Auto-updated on modification
- `deletedAt?: Date` — Soft delete support
- `version: number` — Optimistic locking

### Migrations

```bash
# Generate a migration from entity changes
npm run migration:generate -- src/database/migrations/MigrationName

# Run pending migrations
npm run migration:run

# Revert the last migration
npm run migration:revert

# Create an empty migration
npm run migration:create
```

In development, TypeORM `synchronize: true` is enabled for rapid iteration. Switch to `synchronize: false` + `migration:run` in production.

### Seed Data

On first boot, `SeedService` automatically creates four users:

| Username    | Password   | Role         |
| ----------- | ---------- | ------------ |
| superadmin  | admin123   | super_admin  |
| admin       | admin123   | admin        |
| manager     | admin123   | manager      |
| user        | admin123   | user         |

---

## Docker Deployment

### docker-compose.yml

Four services:

| Service       | Image                        | Port  |
| ------------- | ---------------------------- | ----- |
| `postgres`    | postgres:16-alpine           | 5432  |
| `redis`       | redis:7-alpine               | 6379  |
| `elasticsearch`| elasticsearch:8.12.0        | 9200  |
| `api`         | (built from Dockerfile)      | 3000  |

The API service waits for PostgreSQL and Redis health checks before starting.

### Dockerfile

Multi-stage build:
- **build stage**: Install dependencies, compile TypeScript
- **production stage**: Alpine-based, tini as init, `node` user, only `dist/` and `node_modules/`

```bash
# Build and run
docker compose up -d

# View logs
docker compose logs -f api

# Rebuild after code changes
docker compose build api
docker compose up -d
```

---

## CI/CD

GitHub Actions workflow (`.github/workflows/ci.yml`):

### `lint-test` job
Runs on every push/PR to `main`/`develop`:
1. Start PostgreSQL 16 + Redis 7 service containers
2. `npm ci`
3. `npm run lint`
4. `npm run build`
5. `npm test` (unit tests)
6. `npm run test:e2e` (E2E tests)

### `docker` job
On merge to `main`:
1. Build Docker image with Buildx
2. Push to `ghcr.io/<repository>` with `latest` and commit SHA tags
3. Uses GitHub Actions cache for layer caching

---

## Testing

### Unit Tests

```bash
npm test
```

Unit tests use mocked TypeORM repositories (no database required). Each service test creates a `TestingModule` with mock providers.

Current test suites:
- `src/core/crud.service.spec.ts` — findAll, findOne, create, update, remove, paginate
- `src/modules/auth/auth.service.spec.ts` — register, login
- `src/modules/accounts/accounts.service.spec.ts` — getBalance, findAll
- `src/modules/vouchers/vouchers.service.spec.ts` — confirm, approve state transitions
- `src/app.controller.spec.ts` — root endpoint

### E2E Tests

```bash
npm run test:e2e
```

E2E tests spin up the full application with a real database connection:
- `test/app.e2e-spec.ts` — Health endpoint
- `test/auth.e2e-spec.ts` — Register, login, profile flow

### Coverage

```bash
npm run test:cov
```

---

## Creating a New Module

```bash
# Generate the module scaffold with NestJS CLI
nest g module modules/new-module
nest g service modules/new-module
nest g controller modules/new-module
```

### Module Structure

```typescript
// 1. Entity (extends BaseEntity)
@Entity('new_entities')
export class NewEntity extends BaseEntity {
  @Column() name: string;
}

// 2. Service (extends CrudService)
@Injectable()
export class NewModuleService extends CrudService<NewEntity> {
  constructor(
    @InjectRepository(NewEntity)
    repository: Repository<NewEntity>,
  ) { super(repository); }
}

// 3. Controller (standard CRUD + custom endpoints)
@ApiTags('New Module')
@Controller('new-module')
export class NewModuleController {
  constructor(private readonly service: NewModuleService) {}

  @Post()
  @Roles(UserRole.ADMIN)
  @RequirePermission(Permission.INVENTORY_CREATE)
  create(@Body() dto: CreateNewEntityDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll(@Query() pagination: PaginationDto) {
    return this.service.paginate(pagination);
  }
}

// 4. Module
@Module({
  imports: [TypeOrmModule.forFeature([NewEntity])],
  controllers: [NewModuleController],
  providers: [NewModuleService],
})
export class NewModuleModule {}

// 5. Register in app.module.ts
```

---

## Environment Variables

| Variable       | Default | Description |
|----------------|---------|-------------|
| `NODE_ENV`     | development | Environment mode |
| `PORT`         | 3000 | API server port |
| `DB_HOST`      | localhost | PostgreSQL host |
| `DB_PORT`      | 5432 | PostgreSQL port |
| `DB_USERNAME`  | postgres | Database user |
| `DB_PASSWORD`  | 97531372 | Database password |
| `DB_DATABASE`  | superapp | Database name |
| `DB_SCHEMAS`   | (see .env) | Comma-separated search path schemas |
| `JWT_SECRET`   | (change in production!) | JWT signing secret |
| `JWT_EXPIRES_IN` | 7d | Access token expiry |
| `JWT_REFRESH_EXPIRES_IN` | 30d | Refresh token expiry |
| `REDIS_HOST`   | localhost | Redis host |
| `REDIS_PORT`   | 6379 | Redis port |

---

## License

UNLICENSED — Proprietary
