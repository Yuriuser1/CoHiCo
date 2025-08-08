
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

// Маппинг изображений продуктов
const productImages: Record<string, string> = {
  'SUL001': 'https://cdn.abacus.ai/images/ce759613-3b27-4889-a6a5-b5226c87aaa3.png',
  'SUL002': 'https://imgs.search.brave.com/zM9l5vRSV3atkSI6KS88RqO4qPRj12R3rorDbC3EPMM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4uYnR5YWx5LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wMS9TdWx3aGFzb29fQ29uY2VudHJhdGVkX0dpbnNlbmdfUmVuZXdpbmdfQ3JlYW1famFyX2dpbnNlbmcuanBnP2F1dG89Y29tcHJlc3MsZm9ybWF0JmZvY2FscG9pbnQ9Zm9jYWxwb2ludCZmcC14PTAuNDU3ODQ3MzcyOTM5NjQ3NDUmZnAteT0wLjU4NjMzMjE5ODA2NTQzNiZpeGxpYj1waHAtMy4zLjE',
  'SUL003': 'https://imgs.search.brave.com/k7d_SlY0Mp347simE_Pwh2Z_Za3WMU1bsNFrQhZDgkc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cubG9va2ZhbnRhc3RpYy5jb20vaW1hZ2VzP3VybD1odHRwczovL3N0YXRpYy50aGNkbi5jb20vcHJvZHVjdGltZy9vcmlnaW5hbC8xMzk1MDYxMy0xOTk0OTg3MTYyODk0OTU5LmpwZyZmb3JtYXQ9d2VicCZhdXRvPWF2aWYmd2lkdGg9NDAwJmhlaWdodD00MDAmZml0PWNvdmVy',
  'SUL004': 'https://imgs.search.brave.com/NE5wT-QxP-5sp8_mfWoM1jRCS2jOIrIAiE2ABOs451k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzUxYnNSdzJyOHFMLmpwZw',
  'SUL005': 'https://imgs.search.brave.com/6LfgU_W5_SX0o13IyHStNt16G33tJo0wGLYxgyC2Qqg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzUxR0prMStLWUNMLmpwZw',
  'SUL006': 'https://imgs.search.brave.com/F8SK-4Z1EgprFLVPYnWBrFRFz51YJA-ZDl29wnMK7iw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hbWMuYXBnbG9iYWwuY29tL2ltYWdlLzM4NDIyNDQxNzY0Mi9pbWFnZV9wa2cyc3Z0bzhwMGw1ZG92dDM0czRnZGo1Yi8tRkpQRy9jZ3JfY3JlYW1fcGRwX2ltZ18wMV9wY19oa18yMzA2MjguanBn',
  'SUL007': 'https://imgs.search.brave.com/k7d_SlY0Mp347simE_Pwh2Z_Za3WMU1bsNFrQhZDgkc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cubG9va2ZhbnRhc3RpYy5jb20vaW1hZ2VzP3VybD1odHRwczovL3N0YXRpYy50aGNkbi5jb20vcHJvZHVjdGltZy9vcmlnaW5hbC8xMzk1MDYxMy0xOTk0OTg3MTYyODk0OTU5LmpwZyZmb3JtYXQ9d2VicCZhdXRvPWF2aWYmd2lkdGg9NDAwJmhlaWdodD00MDAmZml0PWNvdmVy',
  'SUL008': 'https://imgs.search.brave.com/02rs5tJhlCx2sYH7J9M4YbDUH6dMboTf32gvOV-tYFA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9teS5zdWx3aGFzb28uY29tL2Nkbi9zaG9wL2ZpbGVzL0dDRjIwMF9HUkVZLnBuZz92PTE3NTE1MzE5NjY',
  'SUL009': 'https://imgs.search.brave.com/pYkugU_4feeuD1vQRj0pHd1z5cL4qDTAiy4Akhjs9X4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zZy5zdWx3aGFzb28uY29tL2Nkbi9zaG9wL2ZpbGVzLzAzLVBST0QtVEVYVFVSRS5wbmc_dj0xNzE0OTkxMDc3',
  'AMP001': 'https://cdn.abacus.ai/images/fd57c46e-f13a-41ca-94a1-2498ef93c04e.png',
  'AMP002': 'https://imgs.search.brave.com/MhqtldkNG2-qJGU-TpMSUPqGNue3vq0cQFWEouX1awA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cy5hbW9yZXBhY2lmaWMuY29tL2Nkbi9zaG9wL3Byb2R1Y3RzL1RJTUVfUkVTUE9OU0VfU2tpbl9SZXNlcnZlX0dlbF9DcmVtZV9EZWx1eGVfOG1sXzFfYTgwMzI4YzAtMjIwMS00YjMzLWE3MGYtNTM2YTg5NDkzZjFiX3gyOTAuanBnP3Y9MTYzMjg1ODEzNA',
  'AMP003': 'https://imgs.search.brave.com/MhqtldkNG2-qJGU-TpMSUPqGNue3vq0cQFWEouX1awA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cy5hbW9yZXBhY2lmaWMuY29tL2Nkbi9zaG9wL3Byb2R1Y3RzL1RJTUVfUkVTUE9OU0VfU2tpbl9SZXNlcnZlX0dlbF9DcmVtZV9EZWx1eGVfOG1sXzFfYTgwMzI4YzAtMjIwMS00YjMzLWE3MGYtNTM2YTg5NDkzZjFiX3gyOTAuanBnP3Y9MTYzMjg1ODEzNA',
  'AMP004': 'https://imgs.search.brave.com/KF7ldoevKhn_WiZej08K099ZDdbY-g5fE935Oz-OWrI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cy5hbW9yZXBhY2lmaWMuY29tL2Nkbi9zaG9wL3Byb2R1Y3RzL1RJTUVfUkVTUE9OU0VfU2tpbl9SZXNlcnZlX0NyZW1lX0RlbHV4ZV84TUxfMV80Yzg0N2EzNy1iZmFhLTRkZDgtYTRmOC01MDE2Zjk1NGQ5YjdfeDI5MC5qcGc_dj0xNjQzMjE1ODgy',
  'AMP005': 'https://imgs.search.brave.com/wMLVmrOiG99VfOINwufoOqS9oLruEuePmDfnuRyNFvY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0aWMuc2tpbnNrb29sYmVhdXR5LmNvbS9pbWcvcHJvZHVjdC8zMDB4MzAwL1RpbWVfUmVzcG9uc2VfRXllX1Jlc2VydmVfQ3JlYW1fNTJmOTU4YjAucG5n',
  'AMP006': 'https://imgs.search.brave.com/_tJ9qoQc5X6tQvsbUbmfeX0kaVvf_D5s0bX4xG-akII/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdjktY2RuLnN0eWxldmFuYS5jb20vbWVkaWEvY2F0YWxvZy9wcm9kdWN0L2NhY2hlLzdlMDBlYjIxZDMwMTNjNjlkMzI0NTlkMGQ5OGUyZmJmL2EvbS9hbW9yZS1wYWNpZmljLXZpbnRhZ2Utc2luZ2xlLWV4dHJhY3QtZXNzZW5jZS03MG1sLTIyNi5qcGc',
  'AMP007': 'https://imgs.search.brave.com/HQdlEpE-Jx-dh1AEjztd3PCRo1AqO0Hm8GPoRGv1_Gs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cy5hbW9yZXBhY2lmaWMuY29tL2Nkbi9zaG9wL3Byb2R1Y3RzL1ZTRUFfQWx0X0ltYWdlX0FQXzIwMjFfTUFSXzFfeDI5MC5qcGc_dj0xNzI1NDc2MjMz',
  'WHO001': 'https://m.media-amazon.com/images/I/21JnHoJAZhL._UF1000,1000_QL80_.jpg',
  'WHO002': 'https://imgs.search.brave.com/3EVMcXgbNkZfJeQllOhLw1wOeNDaaABp3jsXhnok0BA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdjktY2RuLnN0eWxldmFuYS5jb20vbWVkaWEvY2F0YWxvZy9wcm9kdWN0L2NhY2hlLzdlMDBlYjIxZDMwMTNjNjlkMzI0NTlkMGQ5OGUyZmJmL3QvaC90aGUtaGlzdG9yeS1vZi13aG9vLWdvbmdqaW5oeWFuZy1mYWNpYWwtZm9hbS1jbGVhbnNlci00MG1sLTQ1OC5qcGc',
  'WHO003': 'https://cdn.abacus.ai/images/054f160d-323e-42cc-ac98-e10045d07733.png',
  'WHO004': 'https://imgs.search.brave.com/Z1kmh0mzIQZPoclajt7F3_DLpEn3mv-oAaSl26dK-7E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdjktY2RuLnN0eWxldmFuYS5jb20vbWVkaWEvY2F0YWxvZy9wcm9kdWN0L2NhY2hlLzdlMDBlYjIxZDMwMTNjNjlkMzI0NTlkMGQ5OGUyZmJmL3QvaC90aGVoaXN0b3J5b2Z3aG9vLWh3YW55dS1pbXBlcmlhbC15b3V0aC1leWUtY3JlYW0tMC02bWwtOTQ3LmpwZw',
  'WHO005': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2C99UF3O6IAbZuZC7gPc5nYQyB6on1wdH0UkRG6kRXm_cXZnXYei83d3cD4Dw4ugmpUl5PKzyQvdOozxoq-ak-R7JWV1RCcs5XsPYeZDNCpuYIvozye5ft0U1Dzq6lGms9F17fV4Fzsc/s0/Goi-Kem-duong-Whoo-tai-sinh-cao-cap-Cheonyuldan-Ultimate-Regenerating-Cream.png',
  'WHO006': 'https://imgs.search.brave.com/e3Cc8-8hVrXTeO4Crxe71W82qYtb81ToTGuzU_w6loo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cua2JlYXV0eW1ha2V1cC5jb20vY2RuL3Nob3AvcHJvZHVjdHMvcHJvZHVjdF9pbWFnZXNfMTYyMTA2NTI5Ny4xODI2NDU4OTY2XzAwMTYzMzAzMDA3NF9lOWQ0ZDk5MS1mMGU5LTQxMWItOTg2Zi02MzEwZGRhODZjNGUuanBnP3Y9MTYzNDkzNDg5OA',
  'WHO007': 'https://imgs.search.brave.com/JkADCvOQIgGxv_U0bMB2Hncky4_N4PXjSPFg2Q3x0b8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9iZXN0dmlzYWdlLnJ1L2ltYWdlL2NhY2hlL2RhdGEvd2hvby93aG9vLWxpcC1iYWxtLTdnLTMwMHgzMDAuanBn'
};

async function main() {
  console.log('🌱 Начинаем заполнение базы данных...');

  try {
    // Очищаем существующие данные (в правильном порядке из-за FK)
    console.log('🗑️  Очистка существующих данных...');
    await prisma.orderItem.deleteMany();
    await prisma.orderStatusLog.deleteMany();
    await prisma.order.deleteMany();
    await prisma.cartItem.deleteMany();
    await prisma.cart.deleteMany();
    await prisma.review.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();
    await prisma.brand.deleteMany();
    await prisma.contactForm.deleteMany();
    await prisma.newsletter.deleteMany();
    await prisma.customer.deleteMany();
    await prisma.account.deleteMany();
    await prisma.session.deleteMany();
    await prisma.user.deleteMany();

    // Создаем тестового админа
    console.log('👤 Создание тестового админа...');
    const hashedPassword = await bcrypt.hash('johndoe123', 12);
    await prisma.user.create({
      data: {
        name: 'John Doe',
        email: 'john@doe.com',
        password: hashedPassword,
        isAdmin: true,
        emailVerified: new Date(),
      },
    });

    // Создаем бренды
    console.log('🏷️  Создание брендов...');
    const sulwhasoo = await prisma.brand.create({
      data: {
        name: 'Sulwhasoo',
        slug: 'sulwhasoo',
        country: 'Южная Корея',
        description: 'Премиальный бренд, сочетающий традиционную корейскую медицину с современными технологиями',
        philosophy: 'Гармония противоположных энергий (Инь и Ян) и интеграция мудрости природы с научными инновациями',
        founded: 1967,
        active: true,
      },
    });

    const amorePacific = await prisma.brand.create({
      data: {
        name: 'AmorePacific',
        slug: 'amorepacific',
        country: 'Южная Корея',
        description: 'Ведущая корейская косметическая компания, владеющая более 30 брендами',
        philosophy: 'Инновационные разработки с использованием антиоксидантов зеленого чая и натуральных компонентов',
        founded: 1945,
        active: true,
      },
    });

    const whoo = await prisma.brand.create({
      data: {
        name: 'The History of Whoo',
        slug: 'the-history-of-whoo',
        country: 'Южная Корея',
        description: 'Люксовый бренд, вдохновленный древними императорскими рецептами красоты',
        philosophy: 'Слияние традиционной восточной медицины с современными нанотехнологиями',
        active: true,
      },
    });

    // Создаем главные категории
    console.log('📁 Создание категорий...');
    const skincare = await prisma.category.create({
      data: {
        name: 'Уход за кожей',
        slug: 'skincare',
        description: 'Премиальные средства для комплексного ухода за кожей лица',
        active: true,
        sortOrder: 1,
      },
    });

    const makeup = await prisma.category.create({
      data: {
        name: 'Макияж',
        slug: 'makeup',
        description: 'Декоративная косметика премиум-класса',
        active: true,
        sortOrder: 2,
      },
    });

    const sets = await prisma.category.create({
      data: {
        name: 'Наборы',
        slug: 'sets',
        description: 'Готовые комплекты для ухода',
        active: true,
        sortOrder: 3,
      },
    });

    // Создаем подкатегории для ухода за кожей
    const cleansing = await prisma.category.create({
      data: {
        name: 'Очищение',
        slug: 'cleansing',
        description: 'Гидрофильные масла, пенки, гели для умывания',
        parentId: skincare.id,
        active: true,
        sortOrder: 1,
      },
    });

    const toning = await prisma.category.create({
      data: {
        name: 'Тонизирование',
        slug: 'toning',
        description: 'Тоники, эссенции для подготовки кожи',
        parentId: skincare.id,
        active: true,
        sortOrder: 2,
      },
    });

    const serums = await prisma.category.create({
      data: {
        name: 'Сыворотки и эссенции',
        slug: 'serums',
        description: 'Концентрированные средства направленного действия',
        parentId: skincare.id,
        active: true,
        sortOrder: 3,
      },
    });

    const moisturizing = await prisma.category.create({
      data: {
        name: 'Увлажнение',
        slug: 'moisturizing',
        description: 'Кремы, эмульсии для увлажнения и питания',
        parentId: skincare.id,
        active: true,
        sortOrder: 4,
      },
    });

    const eyeCare = await prisma.category.create({
      data: {
        name: 'Уход за кожей вокруг глаз',
        slug: 'eye-care',
        description: 'Специализированные средства для деликатной зоны',
        parentId: skincare.id,
        active: true,
        sortOrder: 5,
      },
    });

    const masks = await prisma.category.create({
      data: {
        name: 'Маски',
        slug: 'masks',
        description: 'Тканевые, альгинатные, ночные маски',
        parentId: skincare.id,
        active: true,
        sortOrder: 6,
      },
    });

    const sunProtection = await prisma.category.create({
      data: {
        name: 'Защита от солнца',
        slug: 'sun-protection',
        description: 'Солнцезащитные средства с SPF',
        parentId: skincare.id,
        active: true,
        sortOrder: 7,
      },
    });

    // Подкатегории для макияжа
    const face = await prisma.category.create({
      data: {
        name: 'Для лица',
        slug: 'face',
        description: 'BB/CC кремы, кушоны, пудры',
        parentId: makeup.id,
        active: true,
        sortOrder: 1,
      },
    });

    const lips = await prisma.category.create({
      data: {
        name: 'Для губ',
        slug: 'lips',
        description: 'Помады, бальзамы, тинты',
        parentId: makeup.id,
        active: true,
        sortOrder: 2,
      },
    });

    // Подкатегории для наборов
    const giftSets = await prisma.category.create({
      data: {
        name: 'Подарочные наборы',
        slug: 'gift-sets',
        description: 'Элегантные наборы в подарочной упаковке',
        parentId: sets.id,
        active: true,
        sortOrder: 1,
      },
    });

    const travelSets = await prisma.category.create({
      data: {
        name: 'Дорожные наборы',
        slug: 'travel-sets',
        description: 'Миниатюры для путешествий',
        parentId: sets.id,
        active: true,
        sortOrder: 2,
      },
    });

    // Создаем продукты Sulwhasoo
    console.log('🧴 Создание продуктов Sulwhasoo...');
    
    // SUL001 - First Care Activating Serum
    await prisma.product.create({
      data: {
        sku: 'SUL001',
        name: 'First Care Activating Serum',
        slug: 'first-care-activating-serum',
        description: 'Активирующая сыворотка - первый шаг в уходе для подготовки кожи к последующим средствам. Более 10 миллионов проданных флаконов с 1997 года.',
        shortDescription: 'Активирующая сыворотка для подготовки кожи',
        brandId: sulwhasoo.id,
        categoryId: serums.id,
        productLine: 'First Care',
        price: 1200000, // 12000 руб в копейках
        volume: '60ml',
        texture: 'легкая эссенция',
        skinTypes: ['все типы кожи'],
        ageGroup: '25+',
        keyIngredients: ['астрагал', 'солодка', 'корейские травяные экстракты'],
        benefits: ['улучшение циркуляции', 'повышение сияния', 'подготовка кожи'],
        usage: 'Нанести на очищенную кожу перед основным уходом',
        imageUrl: productImages['SUL001'],
        images: [productImages['SUL001']],
        inStock: true,
        stockQuantity: 50,
        isActive: true,
        isFeatured: true,
        isBestseller: true,
        popularityScore: 95,
        metaTitle: 'Sulwhasoo First Care Activating Serum - активирующая сыворотка',
        metaDescription: 'Легендарная активирующая сыворотка Sulwhasoo для подготовки кожи к уходу. Более 10 миллионов проданных флаконов.',
      },
    });

    // SUL002 - Concentrated Ginseng Renewing Serum
    await prisma.product.create({
      data: {
        sku: 'SUL002',
        name: 'Concentrated Ginseng Renewing Serum',
        slug: 'concentrated-ginseng-renewing-serum',
        description: 'Интенсивная антивозрастная сыворотка с ферментированным женьшенем для борьбы с признаками старения.',
        shortDescription: 'Антивозрастная сыворотка с женьшенем',
        brandId: sulwhasoo.id,
        categoryId: serums.id,
        productLine: 'Concentrated Ginseng',
        price: 2000000, // 20000 руб
        volume: '30ml',
        texture: 'насыщенная сыворотка',
        skinTypes: ['зрелая кожа', 'нормальная', 'сухая'],
        ageGroup: '35+',
        keyIngredients: ['ферментированный красный женьшень', 'мед'],
        benefits: ['разглаживание морщин', 'повышение упругости', 'детоксикация'],
        usage: 'Применять утром и вечером после тоника',
        imageUrl: productImages['SUL002'],
        images: [productImages['SUL002']],
        inStock: true,
        stockQuantity: 30,
        isActive: true,
        isFeatured: true,
        popularityScore: 90,
        metaTitle: 'Sulwhasoo Concentrated Ginseng Renewing Serum - сыворотка с женьшенем',
        metaDescription: 'Интенсивная антивозрастная сыворотка с ферментированным женьшенем против морщин и для упругости кожи.',
      },
    });

    // SUL003 - Concentrated Ginseng Renewing Cream
    await prisma.product.create({
      data: {
        sku: 'SUL003',
        name: 'Concentrated Ginseng Renewing Cream',
        slug: 'concentrated-ginseng-renewing-cream',
        description: 'Питательный крем для глубокого увлажнения и повышения эластичности с ферментированным женьшенем.',
        shortDescription: 'Антивозрастной крем с женьшенем',
        brandId: sulwhasoo.id,
        categoryId: moisturizing.id,
        productLine: 'Concentrated Ginseng',
        price: 2500000, // 25000 руб
        volume: '60ml',
        texture: 'насыщенный крем',
        skinTypes: ['сухая', 'нормальная', 'зрелая'],
        ageGroup: '30+',
        keyIngredients: ['ферментированный женьшень', 'мед', 'травяные экстракты'],
        benefits: ['глубокое питание', 'улучшение эластичности', 'антивозрастной эффект'],
        usage: 'Завершающий этап вечернего ухода',
        imageUrl: productImages['SUL003'],
        images: [productImages['SUL003']],
        inStock: true,
        stockQuantity: 25,
        isActive: true,
        popularityScore: 88,
        metaTitle: 'Sulwhasoo Concentrated Ginseng Renewing Cream - антивозрастной крем',
        metaDescription: 'Питательный антивозрастной крем с женьшенем для глубокого увлажнения и повышения эластичности кожи.',
      },
    });

    // SUL004 - Essential Balancing Water
    await prisma.product.create({
      data: {
        sku: 'SUL004',
        name: 'Essential Balancing Water',
        slug: 'essential-balancing-water',
        description: 'Балансирующий тоник с травами для глубокого увлажнения и успокоения кожи.',
        shortDescription: 'Балансирующий тоник с травами',
        brandId: sulwhasoo.id,
        categoryId: toning.id,
        productLine: 'Essential',
        price: 450000, // 4500 руб
        volume: '125ml',
        texture: 'гелеобразная',
        skinTypes: ['все типы кожи'],
        keyIngredients: ['портулак', 'дереза китайская', 'травяные экстракты'],
        benefits: ['глубокое увлажнение', 'успокаивание', 'подготовка к уходу'],
        usage: 'После очищения, перед сывороткой',
        imageUrl: productImages['SUL004'],
        images: [productImages['SUL004']],
        inStock: true,
        stockQuantity: 40,
        isActive: true,
        popularityScore: 85,
        metaTitle: 'Sulwhasoo Essential Balancing Water - балансирующий тоник',
        metaDescription: 'Балансирующий тоник с травяными экстрактами для глубокого увлажнения и подготовки кожи к уходу.',
      },
    });

    // SUL005 - Essential Balancing Emulsion
    await prisma.product.create({
      data: {
        sku: 'SUL005',
        name: 'Essential Balancing Emulsion',
        slug: 'essential-balancing-emulsion',
        description: 'Балансирующая эмульсия для увлажнения и укрепления кожи с керамидами.',
        shortDescription: 'Балансирующая эмульсия',
        brandId: sulwhasoo.id,
        categoryId: moisturizing.id,
        productLine: 'Essential',
        price: 520000, // 5200 руб
        volume: '125ml',
        texture: 'легкая эмульсия',
        skinTypes: ['нормальная', 'комбинированная'],
        keyIngredients: ['портулак', 'дереза китайская', 'керамиды'],
        benefits: ['увлажнение', 'укрепление барьера', 'баланс'],
        usage: 'После тоника и сыворотки',
        imageUrl: productImages['SUL005'],
        images: [productImages['SUL005']],
        inStock: true,
        stockQuantity: 35,
        isActive: true,
        popularityScore: 82,
      },
    });

    // SUL006 - Essential Firming Cream
    await prisma.product.create({
      data: {
        sku: 'SUL006',
        name: 'Essential Firming Cream',
        slug: 'essential-firming-cream',
        description: 'Укрепляющий крем для повышения упругости и предотвращения старения кожи.',
        shortDescription: 'Укрепляющий крем',
        brandId: sulwhasoo.id,
        categoryId: moisturizing.id,
        productLine: 'Essential',
        price: 890000, // 8900 руб
        volume: '75ml',
        texture: 'питательный крем',
        skinTypes: ['зрелая', 'сухая'],
        ageGroup: '30+',
        keyIngredients: ['женьшень', 'пептиды', 'коллаген'],
        benefits: ['укрепление контуров', 'повышение упругости', 'антиэйдж'],
        usage: 'Завершающий этап ухода',
        imageUrl: productImages['SUL006'],
        images: [productImages['SUL006']],
        inStock: true,
        stockQuantity: 28,
        isActive: true,
        popularityScore: 84,
      },
    });

    // SUL007 - Concentrated Ginseng Rejuvenating Eye Cream
    await prisma.product.create({
      data: {
        sku: 'SUL007',
        name: 'Concentrated Ginseng Rejuvenating Eye Cream',
        slug: 'concentrated-ginseng-rejuvenating-eye-cream',
        description: 'Омолаживающий крем для кожи вокруг глаз с женьшенем против морщин и отеков.',
        shortDescription: 'Крем для глаз с женьшенем',
        brandId: sulwhasoo.id,
        categoryId: eyeCare.id,
        productLine: 'Concentrated Ginseng',
        price: 1250000, // 12500 руб
        volume: '20ml',
        texture: 'насыщенный крем',
        skinTypes: ['все типы кожи'],
        ageGroup: '30+',
        keyIngredients: ['ферментированный женьшень', 'пептиды', 'кофеин'],
        benefits: ['разглаживание морщин', 'уменьшение отеков', 'повышение упругости'],
        usage: 'Утром и вечером вокруг глаз',
        imageUrl: productImages['SUL007'],
        images: [productImages['SUL007']],
        inStock: true,
        stockQuantity: 22,
        isActive: true,
        popularityScore: 87,
      },
    });

    // SUL008 - Gentle Cleansing Foam
    await prisma.product.create({
      data: {
        sku: 'SUL008',
        name: 'Gentle Cleansing Foam',
        slug: 'gentle-cleansing-foam',
        description: 'Мягкая пенка для умывания с травяными экстрактами для деликатного очищения.',
        shortDescription: 'Мягкая пенка для умывания',
        brandId: sulwhasoo.id,
        categoryId: cleansing.id,
        price: 380000, // 3800 руб
        volume: '200ml',
        texture: 'кремовая пена',
        skinTypes: ['сухая', 'чувствительная', 'нормальная'],
        keyIngredients: ['женьшень', 'мед', 'аминокислоты'],
        benefits: ['мягкое очищение', 'сохранение влаги', 'успокаивание'],
        usage: 'Утром и вечером на влажную кожу',
        imageUrl: productImages['SUL008'],
        images: [productImages['SUL008']],
        inStock: true,
        stockQuantity: 45,
        isActive: true,
        popularityScore: 80,
      },
    });

    // SUL009 - Overnight Vitalizing Mask
    await prisma.product.create({
      data: {
        sku: 'SUL009',
        name: 'Overnight Vitalizing Mask',
        slug: 'overnight-vitalizing-mask',
        description: 'Ночная восстанавливающая маска для сияния кожи с женьшенем и медом.',
        shortDescription: 'Ночная восстанавливающая маска',
        brandId: sulwhasoo.id,
        categoryId: masks.id,
        price: 720000, // 7200 руб
        volume: '120ml',
        texture: 'гелевая маска',
        skinTypes: ['все типы кожи'],
        keyIngredients: ['женьшень', 'мед', 'травяные экстракты'],
        benefits: ['ночное восстановление', 'сияние', 'питание'],
        usage: '2-3 раза в неделю на ночь',
        imageUrl: productImages['SUL009'],
        images: [productImages['SUL009']],
        inStock: true,
        stockQuantity: 32,
        isActive: true,
        popularityScore: 83,
      },
    });

    // Создаем продукты AmorePacific
    console.log('🌿 Создание продуктов AmorePacific...');

    // AMP001 - Treatment Enzyme Cleansing Foam
    await prisma.product.create({
      data: {
        sku: 'AMP001',
        name: 'Treatment Enzyme Cleansing Foam',
        slug: 'treatment-enzyme-cleansing-foam',
        description: 'Увлажняющая пенка для умывания с пробиотическими ферментами зеленого чая для мягкого очищения.',
        shortDescription: 'Пенка с ферментами зеленого чая',
        brandId: amorePacific.id,
        categoryId: cleansing.id,
        productLine: 'Treatment Enzyme',
        price: 450000, // 4500 руб
        volume: '125ml',
        texture: 'мягкая пена',
        skinTypes: ['все типы кожи', 'чувствительная'],
        ageGroup: '18+',
        keyIngredients: ['пробиотические ферменты зеленого чая', 'гиалуроновая кислота', 'экстракт хлопка'],
        benefits: ['мягкое очищение', 'увлажнение', 'успокаивание'],
        usage: 'Утром и вечером на влажную кожу',
        imageUrl: productImages['AMP001'],
        images: [productImages['AMP001']],
        inStock: true,
        stockQuantity: 60,
        isActive: true,
        isFeatured: true,
        isBestseller: true,
        popularityScore: 92,
        metaTitle: 'AmorePacific Treatment Enzyme Cleansing Foam - пенка с ферментами',
        metaDescription: 'Увлажняющая пенка для умывания с пробиотическими ферментами зеленого чая. Бестселлер AmorePacific.',
      },
    });

    // AMP002 - Time Response Skin Reserve Cream
    await prisma.product.create({
      data: {
        sku: 'AMP002',
        name: 'Time Response Skin Reserve Cream',
        slug: 'time-response-skin-reserve-cream',
        description: 'Антивозрастной крем на основе зеленого чая для улучшения упругости и тона кожи.',
        shortDescription: 'Антивозрастной крем с зеленым чаем',
        brandId: amorePacific.id,
        categoryId: moisturizing.id,
        productLine: 'Time Response',
        price: 2500000, // 25000 руб
        volume: '50ml',
        texture: 'питательный крем',
        skinTypes: ['зрелая', 'нормальная', 'комбинированная'],
        ageGroup: '30+',
        keyIngredients: ['экстракт зеленого чая', 'антиоксиданты', 'пептиды'],
        benefits: ['улучшение упругости', 'выравнивание тона', 'антиоксидантная защита'],
        usage: 'Утром и вечером после сыворотки',
        imageUrl: productImages['AMP002'],
        images: [productImages['AMP002']],
        inStock: true,
        stockQuantity: 25,
        isActive: true,
        popularityScore: 85,
      },
    });

    // AMP003 - Treatment Enzyme Peel Cleansing Powder
    await prisma.product.create({
      data: {
        sku: 'AMP003',
        name: 'Treatment Enzyme Peel Cleansing Powder',
        slug: 'treatment-enzyme-peel-cleansing-powder',
        description: 'Энзимная отшелушивающая пудра с гиалуроновой кислотой для глубокого очищения пор.',
        shortDescription: 'Энзимная отшелушивающая пудра',
        brandId: amorePacific.id,
        categoryId: cleansing.id,
        productLine: 'Treatment Enzyme',
        price: 550000, // 5500 руб
        volume: '40g',
        texture: 'пудра, превращающаяся в пену',
        skinTypes: ['все типы кожи'],
        keyIngredients: ['ферменты зеленого чая', 'гиалуроновая кислота', 'рисовые энзимы'],
        benefits: ['отшелушивание', 'увлажнение', 'очищение пор'],
        usage: '2-3 раза в неделю вместо обычного очищения',
        imageUrl: productImages['AMP003'],
        images: [productImages['AMP003']],
        inStock: true,
        stockQuantity: 35,
        isActive: true,
        popularityScore: 88,
      },
    });

    // AMP004 - Moisture Plumping Nectar Cream
    await prisma.product.create({
      data: {
        sku: 'AMP004',
        name: 'Moisture Plumping Nectar Cream',
        slug: 'moisture-plumping-nectar-cream',
        description: 'Увлажняющий крем с бамбуковым нектаром для эластичности кожи и интенсивного увлажнения.',
        shortDescription: 'Увлажняющий крем с бамбуком',
        brandId: amorePacific.id,
        categoryId: moisturizing.id,
        productLine: 'Moisture Plumping',
        price: 800000, // 8000 руб
        volume: '50ml',
        texture: 'легкий крем',
        skinTypes: ['сухая', 'нормальная'],
        keyIngredients: ['бамбуковый нектар', 'гиалуроновая кислота', 'пептиды'],
        benefits: ['интенсивное увлажнение', 'повышение эластичности', 'сияние'],
        usage: 'Утром и вечером после сыворотки',
        imageUrl: productImages['AMP004'],
        images: [productImages['AMP004']],
        inStock: true,
        stockQuantity: 40,
        isActive: true,
        popularityScore: 84,
      },
    });

    // AMP005 - Time Response Eye Reserve Cream
    await prisma.product.create({
      data: {
        sku: 'AMP005',
        name: 'Time Response Eye Reserve Cream',
        slug: 'time-response-eye-reserve-cream',
        description: 'Питательный крем для кожи вокруг глаз с зеленым чаем и витамином E.',
        shortDescription: 'Крем для глаз с зеленым чаем',
        brandId: amorePacific.id,
        categoryId: eyeCare.id,
        productLine: 'Time Response',
        price: 950000, // 9500 руб
        volume: '15ml',
        texture: 'насыщенный крем',
        skinTypes: ['все типы кожи'],
        ageGroup: '25+',
        keyIngredients: ['экстракт зеленого чая', 'пептиды', 'витамин E'],
        benefits: ['питание', 'увлажнение', 'активизация молодости'],
        usage: 'Утром и вечером вокруг глаз',
        imageUrl: productImages['AMP005'],
        images: [productImages['AMP005']],
        inStock: true,
        stockQuantity: 30,
        isActive: true,
        popularityScore: 82,
      },
    });

    // AMP006 - Vintage Single Extract Essence
    await prisma.product.create({
      data: {
        sku: 'AMP006',
        name: 'Vintage Single Extract Essence',
        slug: 'vintage-single-extract-essence',
        description: 'Эссенция с зеленым чаем для улучшения эластичности и тонуса кожи. Бестселлер бренда.',
        shortDescription: 'Эссенция с зеленым чаем',
        brandId: amorePacific.id,
        categoryId: serums.id,
        price: 1200000, // 12000 руб
        volume: '30ml',
        texture: 'концентрированная эссенция',
        skinTypes: ['зрелая', 'тусклая'],
        ageGroup: '30+',
        keyIngredients: ['концентрат зеленого чая', 'антиоксиданты', 'флавоноиды'],
        benefits: ['улучшение эластичности', 'антиоксидантная защита', 'выравнивание тона'],
        usage: 'После тоника, перед кремом',
        imageUrl: productImages['AMP006'],
        images: [productImages['AMP006']],
        inStock: true,
        stockQuantity: 28,
        isActive: true,
        isBestseller: true,
        popularityScore: 90,
      },
    });

    // AMP007 - Color Control Cushion Compact
    await prisma.product.create({
      data: {
        sku: 'AMP007',
        name: 'Color Control Cushion Compact',
        slug: 'color-control-cushion-compact',
        description: 'Кушон с SPF 50+ для идеального покрытия и защиты кожи с гиалуроновой кислотой.',
        shortDescription: 'Кушон с SPF 50+',
        brandId: amorePacific.id,
        categoryId: face.id,
        price: 610000, // 6100 руб
        volume: '15g + refill',
        skinTypes: ['все типы кожи'],
        keyIngredients: ['SPF 50+', 'гиалуроновая кислота', 'экстракт зеленого чая'],
        benefits: ['идеальное покрытие', 'защита от солнца', 'увлажнение'],
        usage: 'Наносить спонжем для равномерного покрытия',
        imageUrl: productImages['AMP007'],
        images: [productImages['AMP007']],
        inStock: true,
        stockQuantity: 50,
        isActive: true,
        isFeatured: true,
        popularityScore: 86,
      },
    });

    // Создаем продукты The History of Whoo
    console.log('👑 Создание продуктов The History of Whoo...');

    // WHO001 - Cheongidan Radiant Regenerating Essence
    await prisma.product.create({
      data: {
        sku: 'WHO001',
        name: 'Cheongidan Radiant Regenerating Essence',
        slug: 'cheongidan-radiant-regenerating-essence',
        description: 'Сияющая регенерирующая эссенция с женьшенем для глубокого увлажнения и придания сияния коже.',
        shortDescription: 'Роскошная эссенция с женьшенем',
        brandId: whoo.id,
        categoryId: serums.id,
        productLine: 'Cheongidan',
        price: 3200000, // 32000 руб
        volume: '40ml',
        texture: 'роскошная эссенция',
        skinTypes: ['все типы кожи', 'тусклая кожа'],
        ageGroup: '25+',
        keyIngredients: ['женьшень', 'золото', 'травяные экстракты', 'жемчужная пудра'],
        benefits: ['глубокое увлажнение', 'сияние', 'регенерация'],
        usage: 'После тоника, перед кремом',
        imageUrl: productImages['WHO001'],
        images: [productImages['WHO001']],
        inStock: true,
        stockQuantity: 15,
        isActive: true,
        isFeatured: true,
        popularityScore: 93,
        metaTitle: 'The History of Whoo Cheongidan Radiant Regenerating Essence',
        metaDescription: 'Роскошная регенерирующая эссенция с женьшенем, золотом и жемчужной пудрой для сияния кожи.',
      },
    });

    // WHO002 - Gongjinhyang Facial Cream Cleanser
    await prisma.product.create({
      data: {
        sku: 'WHO002',
        name: 'Gongjinhyang Facial Cream Cleanser',
        slug: 'gongjinhyang-facial-cream-cleanser',
        description: 'Мягкий крем-очиститель с травяными экстрактами для деликатного очищения и сохранения pH-баланса.',
        shortDescription: 'Крем-очиститель с травами',
        brandId: whoo.id,
        categoryId: cleansing.id,
        productLine: 'Gongjinhyang',
        price: 1300000, // 13000 руб
        volume: '180ml',
        texture: 'кремовая',
        skinTypes: ['сухая', 'чувствительная', 'нормальная'],
        ageGroup: '20+',
        keyIngredients: ['травяные экстракты', 'натуральные масла', 'женьшень'],
        benefits: ['мягкое очищение', 'питание', 'сохранение pH-баланса'],
        usage: 'Массировать на сухую кожу, смыть теплой водой',
        imageUrl: productImages['WHO002'],
        images: [productImages['WHO002']],
        inStock: true,
        stockQuantity: 20,
        isActive: true,
        popularityScore: 80,
      },
    });

    // WHO003 - Jinyulhyang Intensive Revitalizing Essence
    await prisma.product.create({
      data: {
        sku: 'WHO003',
        name: 'Jinyulhyang Intensive Revitalizing Essence',
        slug: 'jinyulhyang-intensive-revitalizing-essence',
        description: 'Интенсивная восстанавливающая эссенция с императорскими травами для омоложения кожи.',
        shortDescription: 'Восстанавливающая эссенция',
        brandId: whoo.id,
        categoryId: serums.id,
        productLine: 'Jinyulhyang',
        price: 2800000, // 28000 руб
        volume: '40ml',
        texture: 'роскошная эссенция',
        skinTypes: ['зрелая', 'сухая'],
        ageGroup: '35+',
        keyIngredients: ['императорские травы', 'золото', 'жемчуг', 'женьшень'],
        benefits: ['интенсивное восстановление', 'питание', 'омоложение'],
        usage: 'После тоника, массирующими движениями',
        imageUrl: productImages['WHO003'],
        images: [productImages['WHO003']],
        inStock: true,
        stockQuantity: 12,
        isActive: true,
        popularityScore: 91,
      },
    });

    // WHO004 - Hwanyu Imperial Youth Eye Cream
    await prisma.product.create({
      data: {
        sku: 'WHO004',
        name: 'Hwanyu Imperial Youth Eye Cream',
        slug: 'hwanyu-imperial-youth-eye-cream',
        description: 'Императорский крем для кожи вокруг глаз с антивозрастным эффектом и золотом.',
        shortDescription: 'Императорский крем для глаз',
        brandId: whoo.id,
        categoryId: eyeCare.id,
        price: 2200000, // 22000 руб
        volume: '20ml',
        texture: 'роскошный крем',
        skinTypes: ['зрелая кожа'],
        ageGroup: '35+',
        keyIngredients: ['императорские травы', 'золото', 'пептиды', 'коллаген'],
        benefits: ['разглаживание морщин', 'лифтинг', 'сияние'],
        usage: 'Утром и вечером похлопывающими движениями',
        imageUrl: productImages['WHO004'],
        images: [productImages['WHO004']],
        inStock: true,
        stockQuantity: 18,
        isActive: true,
        popularityScore: 89,
      },
    });

    // WHO005 - Cheonyuldan Ultimate Regenerative Cream
    await prisma.product.create({
      data: {
        sku: 'WHO005',
        name: 'Cheonyuldan Ultimate Regenerative Cream',
        slug: 'cheonyuldan-ultimate-regenerative-cream',
        description: 'Ультимативный регенерирующий крем с 24-каратным золотом и жемчугом для максимальной регенерации.',
        shortDescription: 'Ультимативный крем с золотом',
        brandId: whoo.id,
        categoryId: moisturizing.id,
        price: 4500000, // 45000 руб
        volume: '60ml',
        texture: 'богатый крем',
        skinTypes: ['зрелая', 'очень сухая'],
        ageGroup: '40+',
        keyIngredients: ['24-каратное золото', 'жемчужная пудра', 'женьшень', 'дендробиум'],
        benefits: ['максимальная регенерация', 'роскошное питание', 'лифтинг'],
        usage: 'Вечером как завершающий этап ухода',
        imageUrl: productImages['WHO005'],
        images: [productImages['WHO005']],
        inStock: true,
        stockQuantity: 8,
        isActive: true,
        isFeatured: true,
        popularityScore: 95,
      },
    });

    // WHO006 - Gong Jin Hyang Hydrating Sunscreen Fluid
    await prisma.product.create({
      data: {
        sku: 'WHO006',
        name: 'Gong Jin Hyang Hydrating Sunscreen Fluid',
        slug: 'gong-jin-hyang-hydrating-sunscreen-fluid',
        description: 'Увлажняющий солнцезащитный флюид с травяными экстрактами и SPF 50+.',
        shortDescription: 'Солнцезащитный флюид',
        brandId: whoo.id,
        categoryId: sunProtection.id,
        productLine: 'Gongjinhyang',
        price: 850000, // 8500 руб
        volume: '60ml',
        texture: 'легкий флюид',
        skinTypes: ['все типы кожи'],
        keyIngredients: ['травяные экстракты', 'SPF 50+', 'гиалуроновая кислота'],
        benefits: ['защита от UV', 'увлажнение', 'антиоксидантная защита'],
        usage: 'Утром как завершающий этап ухода',
        imageUrl: productImages['WHO006'],
        images: [productImages['WHO006']],
        inStock: true,
        stockQuantity: 35,
        isActive: true,
        popularityScore: 85,
      },
    });

    // WHO007 - Gongjinhyang Mi Royal Lip Balm
    await prisma.product.create({
      data: {
        sku: 'WHO007',
        name: 'Gongjinhyang Mi Royal Lip Balm',
        slug: 'gongjinhyang-mi-royal-lip-balm',
        description: 'Королевский бальзам для губ с медом и травами для интенсивного питания.',
        shortDescription: 'Королевский бальзам для губ',
        brandId: whoo.id,
        categoryId: lips.id,
        productLine: 'Gongjinhyang',
        price: 320000, // 3200 руб
        volume: '3.5g',
        texture: 'питательный бальзам',
        keyIngredients: ['мед', 'пчелиный воск', 'травяные экстракты', 'масла'],
        benefits: ['интенсивное питание', 'защита', 'мягкость'],
        usage: 'По необходимости в течение дня',
        imageUrl: productImages['WHO007'],
        images: [productImages['WHO007']],
        inStock: true,
        stockQuantity: 60,
        isActive: true,
        popularityScore: 78,
      },
    });

    console.log('✅ База данных успешно заполнена!');
    console.log('📊 Статистика:');
    console.log(`   👤 Пользователи: ${await prisma.user.count()}`);
    console.log(`   🏷️  Бренды: ${await prisma.brand.count()}`);
    console.log(`   📁 Категории: ${await prisma.category.count()}`);
    console.log(`   🧴 Продукты: ${await prisma.product.count()}`);

  } catch (error) {
    console.error('❌ Ошибка при заполнении базы данных:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
