export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Group {
  id: string;
  name: string;
  creatorId: string;
  participants: Participant[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Participant {
  id: string;
  name: string;
  email: string;
  groupId: string;
  assignedToId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Assignment {
  id: string;
  groupId: string;
  santaId: string;
  recipientId: string;
  createdAt: Date;
  updatedAt: Date;
}