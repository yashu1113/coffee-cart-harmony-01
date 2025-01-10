export type User = {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  password_hash: string;
  role: "admin" | "customer";
  created_at: string; // date-time format
  updated_at: string; // date-time format
};

export type MenuItem = {
  item_id: number;
  name: string;
  description: string;
  price: number;
  availability: boolean;
  category_id: number;
  image_url?: string;
  created_at: string; // date-time format
  updated_at: string; // date-time format
};

export type Category = {
  category_id: number;
  name: string;
  description: string;
  created_at: string; // date-time format
  updated_at: string; // date-time format
};

export type Order = {
  order_id: number;
  user_id: number;
  total_amount: number;
  status: "pending" | "completed" | "canceled";
  created_at: string; // date-time format
  updated_at: string; // date-time format
};

export type OrderItem = {
  order_item_id: number;
  order_id: number;
  item_id: number;
  quantity: number;
  price_at_purchase: number;
  created_at: string; // date-time format
  updated_at: string; // date-time format
};

export type LoyaltyCard = {
  card_id: number;
  user_id: number;
  stamps_collected: number;
  created_at: string; // date-time format
  updated_at: string; // date-time format
};

export type LoyaltyHistory = {
  loyalty_history_id: number;
  card_id: number;
  order_id: number;
  stamps_earned: number;
  stamps_redeemed: number;
  created_at: string; // date-time format
  updated_at: string; // date-time format
};

export type Payment = {
  payment_id: number;
  order_id: number;
  payment_method: "credit_card" | "cash" | "mobile_pay";
  amount_paid: number;
  payment_date: string; // date-time format
};

export type Notification = {
  notification_id: number;
  user_id: number;
  message: string;
  is_read: boolean;
  created_at: string; // date-time format
  updated_at: string; // date-time format
};

export type AuditLog = {
  log_id: number;
  user_id?: number;
  action_type: string;
  details: string;
  created_at: string; // date-time format
};
