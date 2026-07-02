export const EntityEvents = {
  CREATED: 'entity.created',
  UPDATED: 'entity.updated',
  DELETED: 'entity.deleted',
  SOFT_DELETED: 'entity.softDeleted',
  RESTORED: 'entity.restored',
};

export const DomainEvents = {
  VOUCHER_CONFIRMED: 'voucher.confirmed',
  VOUCHER_APPROVED: 'voucher.approved',
  VOUCHER_REJECTED: 'voucher.rejected',
  EMPLOYEE_CREATED: 'employee.created',
  EMPLOYEE_TERMINATED: 'employee.terminated',
  PRODUCT_LOW_STOCK: 'product.lowStock',
  INVOICE_ISSUED: 'invoice.issued',
  INVOICE_PAID: 'invoice.paid',
  INVOICE_CANCELLED: 'invoice.cancelled',
  INVENTORY_CONFIRMED: 'inventory.confirmed',
  INVENTORY_CANCELLED: 'inventory.cancelled',
};
