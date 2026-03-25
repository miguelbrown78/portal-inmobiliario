import {
  mysqlTable,
  int,
  varchar,
  text,
  boolean,
  decimal,
  timestamp,
  mysqlEnum,
  primaryKey,
} from "drizzle-orm/mysql-core";

// ───────────────────────────────────────────
// USUARIOS
// ───────────────────────────────────────────
export const usuarios = mysqlTable("usuarios", {
  id: int("id").primaryKey().autoincrement(),
  email: varchar("email", { length: 100 }).unique().notNull(),
  password_hash: varchar("password_hash", { length: 255 }).notNull(),
  nombre: varchar("nombre", { length: 100 }).notNull(),
  activo: boolean("activo").default(true),
  created_at: timestamp("created_at").defaultNow(),
});

// ───────────────────────────────────────────
// ZONAS
// ───────────────────────────────────────────
export const zonas = mysqlTable("zonas", {
  id: int("id").primaryKey().autoincrement(),
  nombre: varchar("nombre", { length: 100 }).notNull(),
  ciudad: varchar("ciudad", { length: 100 }).notNull(),
  provincia: varchar("provincia", { length: 100 }).notNull(),
});

// ───────────────────────────────────────────
// PROPIEDADES
// ───────────────────────────────────────────
export const propiedades = mysqlTable("propiedades", {
  id: int("id").primaryKey().autoincrement(),
  slug: varchar("slug", { length: 200 }).unique().notNull(),
  titulo: varchar("titulo", { length: 200 }).notNull(),
  descripcion: text("descripcion"),
  tipo_inmueble: mysqlEnum("tipo_inmueble", [
    "piso",
    "casa",
    "local",
    "terreno",
    "garaje",
  ]).notNull(),
  tipo_operacion: mysqlEnum("tipo_operacion", [
    "venta",
    "alquiler",
    "alquiler_vacacional",
    "obra_nueva",
  ]).notNull(),
  estado: mysqlEnum("estado", [
    "borrador",
    "publicada",
    "reservada",
    "vendida",
  ]).default("borrador"),
  precio: decimal("precio", { precision: 12, scale: 2 }).notNull(),
  metros_utiles: int("metros_utiles"),
  habitaciones: int("habitaciones"),
  banos: int("banos"),
  certificado_energetico: mysqlEnum("certificado_energetico", [
    "A", "B", "C", "D", "E", "F", "G",
  ]),
  direccion: varchar("direccion", { length: 255 }),
  ciudad: varchar("ciudad", { length: 100 }),
  provincia: varchar("provincia", { length: 100 }),
  codigo_postal: varchar("codigo_postal", { length: 10 }),
  zona_id: int("zona_id"),
  lat: decimal("lat", { precision: 10, scale: 7 }),
  lng: decimal("lng", { precision: 10, scale: 7 }),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow().onUpdateNow(),
});

// ───────────────────────────────────────────
// IMAGENES
// ───────────────────────────────────────────
export const imagenes = mysqlTable("imagenes", {
  id: int("id").primaryKey().autoincrement(),
  propiedad_id: int("propiedad_id").notNull(),
  url: varchar("url", { length: 500 }).notNull(),
  orden: int("orden").default(0),
  es_principal: boolean("es_principal").default(false),
});

// ───────────────────────────────────────────
// CARACTERISTICAS
// ───────────────────────────────────────────
export const caracteristicas = mysqlTable("caracteristicas", {
  id: int("id").primaryKey().autoincrement(),
  nombre: varchar("nombre", { length: 100 }).notNull(),
  icono: varchar("icono", { length: 100 }),
});

// ───────────────────────────────────────────
// PROPIEDADES_CARACTERISTICAS
// ───────────────────────────────────────────
export const propiedades_caracteristicas = mysqlTable(
  "propiedades_caracteristicas",
  {
    propiedad_id: int("propiedad_id").notNull(),
    caracteristica_id: int("caracteristica_id").notNull(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.propiedad_id, t.caracteristica_id] }),
  })
);

// ───────────────────────────────────────────
// AGENTES_PROPIEDADES
// ───────────────────────────────────────────
export const agentes_propiedades = mysqlTable(
  "agentes_propiedades",
  {
    propiedad_id: int("propiedad_id").notNull(),
    usuario_id: int("usuario_id").notNull(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.propiedad_id, t.usuario_id] }),
  })
);

// ───────────────────────────────────────────
// PROPIEDADES_TRADUCCIONES
// ───────────────────────────────────────────
export const propiedades_traducciones = mysqlTable("propiedades_traducciones", {
  id: int("id").primaryKey().autoincrement(),
  propiedad_id: int("propiedad_id").notNull(),
  idioma: varchar("idioma", { length: 5 }).notNull(),
  titulo: varchar("titulo", { length: 200 }).notNull(),
  descripcion: text("descripcion"),
});