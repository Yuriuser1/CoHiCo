// Product Types
export interface Brand {
  id: string
  name: string
  slug: string
  country: string
  description: string
  philosophy: string
  founded?: number
  logoUrl?: string
  active: boolean
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  parentId?: string
  imageUrl?: string
  active: boolean
  sortOrder: number
}

export interface Product {
  id: string
  sku: string
  name: string
  slug: string
  description: string
  shortDescription?: string | null
  brandId: string
  categoryId: string
  productLine?: string | null
  price: number // в копейках
  compareAtPrice?: number | null
  volume?: string | null
  texture?: string | null
  skinTypes: string[]
  ageGroup?: string | null
  keyIngredients: string[]
  benefits: string[]
  usage?: string | null
  imageUrl?: string | null
  images: string[]
  inStock: boolean
  stockQuantity: number
  isActive: boolean
  isFeatured: boolean
  isBestseller: boolean
  isNew: boolean
  popularityScore: number
}

export interface ProductWithRelations extends Product {
  brand: Brand
  category: Category
}

// Cart Types
export interface CartItem {
  id: string
  productId: string
  quantity: number
  product: {
    id: string
    name: string
    price: number
    imageUrl?: string | null
    inStock: boolean
    volume?: string | null
    brand: {
      name: string
    }
  }
}

export interface Cart {
  id: string
  userId: string
  items: CartItem[]
}

// Order Types
export type OrderStatus = 
  | 'PENDING'
  | 'CONFIRMED'
  | 'PROCESSING'
  | 'SHIPPED'
  | 'DELIVERED'
  | 'CANCELLED'
  | 'RETURNED'

export type PaymentStatus = 
  | 'PENDING'
  | 'PAID'
  | 'FAILED'
  | 'REFUNDED'

export type DeliveryType = 
  | 'COURIER_SPB'
  | 'SDEK'
  | 'RUSSIAN_POST'
  | 'YANDEX_DELIVERY'

export interface ShippingAddress {
  firstName: string
  lastName: string
  phone: string
  email: string
  city: string
  address: string
  apartment?: string
  postalCode: string
  comment?: string
}

export interface Order {
  id: string
  orderNumber: string
  userId: string
  status: OrderStatus
  totalAmount: number
  subtotalAmount: number
  shippingAmount: number
  discountAmount: number
  customerName: string
  customerEmail: string
  customerPhone?: string
  shippingAddress: ShippingAddress
  deliveryType: DeliveryType
  deliveryInfo?: any
  paymentStatus: PaymentStatus
  paymentMethod?: string
  paymentId?: string
  trackingNumber?: string
  notes?: string
  createdAt: Date
  updatedAt: Date
}

// Filter Types
export interface ProductFilters {
  brands?: string[]
  categories?: string[]
  priceRange?: {
    min: number
    max: number
  }
  skinTypes?: string[]
  inStock?: boolean
  search?: string
  sortBy?: 'name' | 'price' | 'popularity' | 'newest'
  sortOrder?: 'asc' | 'desc'
}

// Delivery Types
export interface DeliveryOption {
  type: DeliveryType
  name: string
  description: string
  price: number
  estimatedDays: string
  restrictions?: string
  available: boolean
}

// Form Types
export interface ContactFormData {
  name: string
  email: string
  subject?: string
  message: string
}

export interface CheckoutFormData {
  shippingAddress: ShippingAddress
  deliveryType: DeliveryType
  paymentMethod: string
  notes?: string
}

// Analytics Types
export interface SalesAnalytics {
  totalRevenue: number
  totalOrders: number
  averageOrderValue: number
  topSellingProducts: Array<{
    product: ProductWithRelations
    quantitySold: number
    revenue: number
  }>
  ordersByStatus: Record<OrderStatus, number>
  revenueByMonth: Array<{
    month: string
    revenue: number
    orders: number
  }>
}

// SEO Types
export interface SEOData {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  canonicalUrl?: string
}

// Utility Types
export type DateRange = {
  from: Date | undefined
  to: Date | undefined
}

export interface PaginationInfo {
  page: number
  limit: number
  total: number
  totalPages: number
}

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  pagination?: PaginationInfo
}

// Constants
export const SKIN_TYPES = [
  'нормальная',
  'сухая', 
  'жирная',
  'комбинированная',
  'чувствительная',
  'зрелая',
  'проблемная',
  'обезвоженная'
] as const

export const DELIVERY_OPTIONS: DeliveryOption[] = [
  {
    type: 'COURIER_SPB',
    name: 'Курьерская доставка по СПб',
    description: 'Быстрая доставка курьером по Санкт-Петербургу',
    price: 35000, // 350 руб в копейках
    estimatedDays: '1-2 дня',
    restrictions: 'Только в пределах КАД',
    available: true
  },
  {
    type: 'SDEK',
    name: 'СДЭК',
    description: 'Доставка в пункты выдачи СДЭК по всей России',
    price: 25000, // 250 руб
    estimatedDays: '2-7 дней',
    available: true
  },
  {
    type: 'RUSSIAN_POST',
    name: 'Почта России',
    description: 'Доставка Почтой России',
    price: 30000, // 300 руб
    estimatedDays: '5-14 дней',
    available: true
  },
  {
    type: 'YANDEX_DELIVERY',
    name: 'Яндекс Доставка',
    description: 'Экспресс доставка от Яндекса',
    price: 45000, // 450 руб
    estimatedDays: 'В течение дня',
    restrictions: 'Доступно не во всех городах',
    available: true
  }
]