-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-07-2025 a las 20:37:33
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `laravel_12`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `attribute_products`
--

CREATE TABLE `attribute_products` (
  `id` varchar(255) NOT NULL,
  `array_attributes` text NOT NULL,
  `id_product` varchar(200) DEFAULT NULL,
  `id_variety` varchar(200) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `attribute_products`
--

INSERT INTO `attribute_products` (`id`, `array_attributes`, `id_product`, `id_variety`, `created_at`, `updated_at`, `deleted_at`) VALUES
('01981014-4717-72d6-96e3-a9957334d95f', '[{\"title\":\"1kg\",\"qty\":\"3\",\"price\":\"10\"}]', '01981014-4711-73b7-b17c-d04f8e630d05', '0197fa5d-b904-7019-aa38-b6a88559ddb2', '2025-07-16 01:53:41', '2025-07-16 01:53:41', '2025-07-15 21:53:41');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('laravel_cache_user@gmail.com|127.0.0.1', 'i:1;', 1752591054),
('laravel_cache_user@gmail.com|127.0.0.1:timer', 'i:1752591054;', 1752591054);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`, `description`, `is_active`, `created_at`, `updated_at`, `deleted_at`) VALUES
('01971df4-7a0e-72ec-9965-05c48f1835c3', 'Agroquímicos', 'categoria', NULL, 1, '2025-05-30 01:30:50', '2025-07-03 21:45:47', NULL),
('0197c7c3-64c6-724c-a0be-77e8d89e4574', 'Cortasetos', 'categoria 1', NULL, 1, '2025-07-02 02:52:40', '2025-07-03 21:46:02', NULL),
('0197d165-866c-7237-8ce4-59d942c762d4', 'Enmienda', 'Enmienda', NULL, 1, '2025-07-03 21:46:21', '2025-07-03 21:46:21', NULL),
('0197d165-9f62-700d-9be3-6219ae1f791e', 'Fumigadora', 'Fumigadora', NULL, 1, '2025-07-03 21:46:27', '2025-07-03 21:46:27', NULL),
('0197d165-b855-73f6-9aca-7f97f17697eb', 'Motosierras', 'Motosierras', NULL, 1, '2025-07-03 21:46:33', '2025-07-03 21:46:33', NULL),
('0197d165-d282-7045-a84f-422272639c65', 'Podadora de altura', 'Podadora de altura', NULL, 1, '2025-07-03 21:46:40', '2025-07-03 21:46:40', NULL),
('0197d165-f8ea-72b3-bee9-6ca7b93647c3', 'Sopladoras', 'Sopladoras', NULL, 1, '2025-07-03 21:46:50', '2025-07-03 21:46:50', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `customers`
--

CREATE TABLE `customers` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `phone` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `zip_code` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL DEFAULT 'México',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jobs`
--

CREATE TABLE `jobs` (
  `id` varchar(255) NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_05_26_194531_product', 1),
(5, '2025_05_26_194552_categories', 1),
(6, '2025_05_26_194615_customer', 1),
(7, '2025_05_26_194636_order', 1),
(8, '2025_05_26_194650_payment', 1),
(9, '2025_05_26_195542_order_product', 1),
(10, '2025_05_28_183558_create_personal_access_tokens_table', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `id` varchar(255) NOT NULL,
  `customer_id` bigint(20) UNSIGNED NOT NULL,
  `order_number` varchar(255) NOT NULL,
  `status` enum('pending','processing','on_hold','completed','cancelled','refunded','failed') NOT NULL DEFAULT 'pending',
  `total` decimal(10,2) NOT NULL,
  `subtotal` decimal(10,2) NOT NULL,
  `tax` decimal(10,2) NOT NULL DEFAULT 0.00,
  `shipping_cost` decimal(10,2) NOT NULL DEFAULT 0.00,
  `payment_method` varchar(255) NOT NULL DEFAULT 'bank_transfer',
  `bank_transfer_details` text DEFAULT NULL,
  `shipping_address` text NOT NULL,
  `billing_address` text NOT NULL,
  `notes` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `order_product`
--

CREATE TABLE `order_product` (
  `id` varchar(255) NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `participants`
--

CREATE TABLE `participants` (
  `id` varchar(200) NOT NULL,
  `ci` varchar(250) NOT NULL,
  `name` varchar(250) NOT NULL,
  `lastname` varchar(250) NOT NULL,
  `phone` varchar(250) NOT NULL,
  `email` varchar(200) DEFAULT NULL,
  `city_id` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `participants`
--

INSERT INTO `participants` (`id`, `ci`, `name`, `lastname`, `phone`, `email`, `city_id`, `created_at`, `updated_at`) VALUES
('9ee35ba4-daa3-4088-9755-0bd53bcf06d4', '0923737159', 'LIBIO', 'PAREJA', '0993371891', 'alucina.ec@gmail.com', '9cfea93a-8977-4666-992d-dfd393febe53', '2025-05-11 23:55:22', '2025-05-12 01:15:04'),
('9ee3d294-e69f-48cb-8650-7adc4337b689', '1234567890', 'MARIBETH', 'rodriguez', '0999842851', 'marybethr22.ec@gmail.com', '9cfea93a-8977-4666-992d-dfd393febe53', '2025-05-12 05:27:57', '2025-05-12 05:27:57'),
('9ee3d536-2d16-42df-bac5-68acaa599267', '2863663636', 'Miguel', 'Moreira', '0995501485', 'm_moreira90@hotmail.com', '9cfea93a-8977-4666-992d-dfd393febe53', '2025-05-12 05:35:18', '2025-05-12 05:35:18'),
('9ee5a3ba-6be0-4c4a-a7f2-74d5b6057027', '24787555', 'alfredo', 'zerpa', '04124119019', 'xoscuro3@gmail.com', '9cfea93a-6b00-49f8-8c62-9005d74fc596', '2025-05-13 03:08:36', '2025-05-13 04:07:29'),
('9ee77dfe-0a20-4317-80ac-a6bc1eb16fa1', '29456874', 'cristian', 'rivas', '04124119019', 'xoscuro33@gmail.com', '9cfea93a-6b00-49f8-8c62-9005d74fc596', '2025-05-14 01:14:44', '2025-05-14 18:18:19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payments`
--

CREATE TABLE `payments` (
  `id` varchar(255) NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `payment_method` varchar(255) NOT NULL DEFAULT 'bank_transfer',
  `transaction_id` varchar(255) DEFAULT NULL,
  `status` enum('pending','completed','failed','refunded') NOT NULL DEFAULT 'pending',
  `bank_name` varchar(255) DEFAULT NULL,
  `account_number` varchar(255) DEFAULT NULL,
  `account_holder` varchar(255) DEFAULT NULL,
  `payment_proof` varchar(255) DEFAULT NULL,
  `payment_date` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` varchar(255) NOT NULL,
  `category_id` varchar(200) NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL DEFAULT 0,
  `sku` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `gallery` text DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `category_id`, `name`, `slug`, `description`, `price`, `stock`, `sku`, `image`, `gallery`, `is_active`, `created_at`, `updated_at`, `deleted_at`) VALUES
('01981014-4711-73b7-b17c-d04f8e630d05', '01971df4-7a0e-72ec-9965-05c48f1835c3', 'producto', '007', NULL, 5.00, 3, '001', 'http://127.0.0.1:8000/storage/productos/0100e95004038000_2025-07-13_11-27-08-222.png', '[]', 1, '2025-07-16 01:53:41', '2025-07-16 01:53:41', '2025-07-15 21:53:41');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('WlheWb2K9wKRfXmg7Avn2mr3GfHJUzoGzpGrOPVH', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoibHZHM2NKd3pFZHNLY0w2YUxybVRURjVIRzM3bDNHVE8zUkZmdXBSQyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1752617041),
('x1pWQehBR7mWEDlXmIVSILcEVYRwToI2mIwubAyC', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUngxWUV5QVhSWVNXZTJNUlFpdDB3OGVPSFFvdUFCQ3BycGoxVzZkTiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NzI6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9zaW5nbGVQcm9kdWN0LzAxOTgxMDE0LTQ3MTEtNzNiNy1iMTdjLWQwNGY4ZTYzMGQwNSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1752690903);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'user',
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `role`, `is_active`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
('d2485d50-02a8-43ca-a777-4ea6e18c3fc6', 'VfnOJZwfCP', 'admin@gmail.com', 'user', 1, NULL, '$2y$12$uDwVEAodXQ/rBVT1w35qCOm0F1gLvyU7qooHBc/dBcEOKFgh02ONe', 'Y3etjBodPYYiZXy7kCtlvgtaRu5j6HrXjV1qn2Wzx4QuAsnxXJaNw8qifKPf', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `variety_products`
--

CREATE TABLE `variety_products` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `variety_products`
--

INSERT INTO `variety_products` (`id`, `name`, `slug`, `description`, `image`, `is_active`, `created_at`, `updated_at`, `deleted_at`) VALUES
('0197fa59-4a05-7022-aba6-c01a282407a5', 'nuevo', 'nuevo', NULL, NULL, 1, '2025-07-11 20:37:25', '2025-07-11 20:37:25', '2025-07-11 16:37:25'),
('0197fa59-fcc7-70ee-bd2e-e29b3dd057e1', 'test', 'test', NULL, NULL, 1, '2025-07-11 20:38:10', '2025-07-11 20:38:10', '2025-07-11 16:38:10'),
('0197fa5a-74b6-71a9-a6b6-c5942660fcc4', 'lol', 'lol', NULL, NULL, 1, '2025-07-11 20:38:41', '2025-07-11 20:38:41', '2025-07-11 16:38:41'),
('0197fa5d-26b2-70a2-8e06-bd881cbe6fde', 'test 2', 'test 2', NULL, NULL, 1, '2025-07-11 20:41:38', '2025-07-11 20:41:38', '2025-07-11 16:41:38'),
('0197fa5d-b904-7019-aa38-b6a88559ddb2', 'nuevo 2', 'nuevo 2', NULL, NULL, 1, '2025-07-11 20:42:15', '2025-07-11 20:42:15', '2025-07-11 16:42:15'),
('0197fae6-5fbe-7188-bd5c-bc4aad1f85ac', 'XD', 'XD', NULL, NULL, 1, '2025-07-11 23:11:31', '2025-07-11 23:11:31', '2025-07-11 19:11:31'),
('0197fae6-e5a1-7311-ad7a-ae02ddd4a609', ':D', ':D', NULL, NULL, 1, '2025-07-11 23:12:05', '2025-07-11 23:12:05', '2025-07-11 19:12:05'),
('0197fb6e-4732-73ed-9a62-691620a84dd5', 'Peso', 'Peso', NULL, NULL, 1, '2025-07-12 01:39:57', '2025-07-12 01:39:57', '2025-07-11 21:39:57'),
('0197fb78-ef54-7399-bd96-ab7918205c3e', 'Dimension', 'Dimension', NULL, NULL, 1, '2025-07-12 01:51:36', '2025-07-12 01:51:36', '2025-07-11 21:51:36');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `attribute_products`
--
ALTER TABLE `attribute_products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indices de la tabla `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_slug_unique` (`slug`);

--
-- Indices de la tabla `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indices de la tabla `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `orders_order_number_unique` (`order_number`);

--
-- Indices de la tabla `order_product`
--
ALTER TABLE `order_product`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `participants`
--
ALTER TABLE `participants`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indices de la tabla `variety_products`
--
ALTER TABLE `variety_products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
