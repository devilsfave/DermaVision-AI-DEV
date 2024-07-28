export type Notification = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  messageField: string | null;
  createdAtField: Date | null;
  readStatusField: boolean | null;
  userRefField: string | null;
};
