export const enum NotificationTypes {
    Info,
    Error,
    Warning,
    Success
}

export const enum NotificationPositions {
    Bottom,
    bottomRight
}

export interface NotificationsActionSend {
    position: NotificationPositions
    type: NotificationTypes
    text: string
    duration: number
}
