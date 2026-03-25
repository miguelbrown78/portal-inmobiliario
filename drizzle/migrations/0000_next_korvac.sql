CREATE TABLE `agentes_propiedades` (
	`propiedad_id` int NOT NULL,
	`usuario_id` int NOT NULL,
	CONSTRAINT `agentes_propiedades_propiedad_id_usuario_id_pk` PRIMARY KEY(`propiedad_id`,`usuario_id`)
);
--> statement-breakpoint
CREATE TABLE `caracteristicas` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nombre` varchar(100) NOT NULL,
	`icono` varchar(100),
	CONSTRAINT `caracteristicas_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `imagenes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`propiedad_id` int NOT NULL,
	`url` varchar(500) NOT NULL,
	`orden` int DEFAULT 0,
	`es_principal` boolean DEFAULT false,
	CONSTRAINT `imagenes_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `propiedades` (
	`id` int AUTO_INCREMENT NOT NULL,
	`slug` varchar(200) NOT NULL,
	`titulo` varchar(200) NOT NULL,
	`descripcion` text,
	`tipo_inmueble` enum('piso','casa','local','terreno','garaje') NOT NULL,
	`tipo_operacion` enum('venta','alquiler','alquiler_vacacional','obra_nueva') NOT NULL,
	`estado` enum('borrador','publicada','reservada','vendida') DEFAULT 'borrador',
	`precio` decimal(12,2) NOT NULL,
	`metros_utiles` int,
	`habitaciones` int,
	`banos` int,
	`certificado_energetico` enum('A','B','C','D','E','F','G'),
	`direccion` varchar(255),
	`ciudad` varchar(100),
	`provincia` varchar(100),
	`codigo_postal` varchar(10),
	`zona_id` int,
	`lat` decimal(10,7),
	`lng` decimal(10,7),
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `propiedades_id` PRIMARY KEY(`id`),
	CONSTRAINT `propiedades_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `propiedades_caracteristicas` (
	`propiedad_id` int NOT NULL,
	`caracteristica_id` int NOT NULL,
	CONSTRAINT `propiedades_caracteristicas_propiedad_id_caracteristica_id_pk` PRIMARY KEY(`propiedad_id`,`caracteristica_id`)
);
--> statement-breakpoint
CREATE TABLE `propiedades_traducciones` (
	`id` int AUTO_INCREMENT NOT NULL,
	`propiedad_id` int NOT NULL,
	`idioma` varchar(5) NOT NULL,
	`titulo` varchar(200) NOT NULL,
	`descripcion` text,
	CONSTRAINT `propiedades_traducciones_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `usuarios` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(100) NOT NULL,
	`password_hash` varchar(255) NOT NULL,
	`nombre` varchar(100) NOT NULL,
	`activo` boolean DEFAULT true,
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `usuarios_id` PRIMARY KEY(`id`),
	CONSTRAINT `usuarios_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `zonas` (
	`id` int AUTO_INCREMENT NOT NULL,
	`nombre` varchar(100) NOT NULL,
	`ciudad` varchar(100) NOT NULL,
	`provincia` varchar(100) NOT NULL,
	CONSTRAINT `zonas_id` PRIMARY KEY(`id`)
);
