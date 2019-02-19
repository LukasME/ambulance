export interface WaitingListEntry {
    name: string;
    patientId: string;
    since: Date;
    estimated: Date;
    estimatedDurationMinutes: number;
    condition: string;
  }
  