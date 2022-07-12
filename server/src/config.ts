export const { HOST, PORT, DATABASE_URL, SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = {
  HOST: process.env.HOST!,
  PORT: parseInt(process.env.PORT!, 10),
  DATABASE_URL: process.env.DATABASE_URL!,
  SMTP_HOST: process.env.SMTP_HOST!,
  SMTP_PORT: parseInt(process.env.SMTP_HOST!, 10),
  SMTP_USER: process.env.SMTP_USER!,
  SMTP_PASS: process.env.SMTP_PASS!,
}