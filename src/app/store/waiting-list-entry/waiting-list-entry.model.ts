export interface WaitingListEntry {
  id: string;
  name: string;
  patientId: string;
  since: Date;
  estimated: Date;
  estimatedDurationMinutes: number;
  condition: string;
}
