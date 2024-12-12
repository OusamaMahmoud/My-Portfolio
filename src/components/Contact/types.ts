import { LucideIcon } from 'lucide-react';

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface SubmitStatus {
  type: 'success' | 'error' | null;
  message: string;
}

export interface ContactInfoItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}