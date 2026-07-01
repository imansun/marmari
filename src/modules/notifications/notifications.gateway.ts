import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({
  cors: { origin: '*', credentials: true },
  namespace: '/notifications',
})
export class NotificationsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  private readonly logger = new Logger(NotificationsGateway.name);
  private userSockets = new Map<string, string[]>();

  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket): void {
    const userId = client.handshake.query.userId as string;
    if (userId) {
      const existing = this.userSockets.get(userId) || [];
      existing.push(client.id);
      this.userSockets.set(userId, existing);
      void client.join(`user:${userId}`);
    }
    this.logger.log(
      `Client connected: ${client.id} (user: ${userId || 'anonymous'})`,
    );
  }

  handleDisconnect(client: Socket): void {
    const userId = client.handshake.query.userId as string;
    if (userId) {
      const existing = this.userSockets.get(userId) || [];
      this.userSockets.set(
        userId,
        existing.filter((id) => id !== client.id),
      );
      if (this.userSockets.get(userId)?.length === 0)
        this.userSockets.delete(userId);
    }
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('subscribe')
  async handleSubscribe(client: Socket, channel: string): Promise<void> {
    await client.join(channel);
    this.logger.log(`Client ${client.id} subscribed to ${channel}`);
  }

  @SubscribeMessage('unsubscribe')
  async handleUnsubscribe(client: Socket, channel: string): Promise<void> {
    await client.leave(channel);
  }

  notifyUser(userId: string, event: string, payload: unknown): void {
    this.server.to(`user:${userId}`).emit(event, payload);
  }

  notifyAll(event: string, payload: unknown): void {
    this.server.emit(event, payload);
  }

  notifyChannel(channel: string, event: string, payload: unknown): void {
    this.server.to(channel).emit(event, payload);
  }
}
