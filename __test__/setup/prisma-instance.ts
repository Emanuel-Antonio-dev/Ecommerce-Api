import { prismaService } from "../../src/lib/prisma.service";

export async function resetDatabase() {
  await prismaService.$executeRawUnsafe(`
    TRUNCATE TABLE
      "tbl_system_logs",
      "tbl_users_actions",
      "tbl_tours_avaliations",
      "tbl_users_avaliations",
      "tbl_guides_tours",
      "tbl_supervisor_cities_tours",
      "tbl_tour_appoiments",
      "tbl_tour_images",
      "tbl_itineraries",
      "tbl_tours",
      "tbl_services",
      "tbl_services_categories",
      "tbl_partners_services",
      "tbl_partners",
      "tbl_tour_destinations",
      "tbl_images",
      "tbl_videos",
      "tbl_mulembe_mideas",
      "tbl_social_mideas_urls",
      "tbl_system_seo_settings",
      "tbl_two_factor_auth",
      "tbl_tokens",
      "tbl_authentications",
      "tbl_contacts",
      "tbl_tourists",
      "tbl_tour_guides",
      "tbl_supervisors",
      "tbl_admins",
      "tbl_users",
      "tbl_accounts"
    RESTART IDENTITY CASCADE;
  `);
}
