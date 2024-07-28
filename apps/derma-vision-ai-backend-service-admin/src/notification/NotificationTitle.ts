import { Notification as TNotification } from "../api/notification/Notification";

export const NOTIFICATION_TITLE_FIELD = "userRefField";

export const NotificationTitle = (record: TNotification): string => {
  return record.userRefField?.toString() || String(record.id);
};
