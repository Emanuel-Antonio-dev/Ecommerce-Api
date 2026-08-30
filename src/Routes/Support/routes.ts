import { Request, Response, Router } from "express";
import { MiddlewareAuthorization, RequestWithCredentials } from "../../Common/Middlewares/Authorization/authorization";
import { limiterMiddleware } from "../../Common/Middlewares/Limiters/requests-limiter.config";
import { CreateTicketController } from "../../Controllers/Support/create-ticket.controller";
import { GetTicketController } from "../../Controllers/Support/get-ticket.controller";
import { GetMyTicketsController } from "../../Controllers/Support/get-my-tickets.controller";
import { GetAllTicketsController } from "../../Controllers/Support/get-all-tickets.controller";
import { ReplyTicketController } from "../../Controllers/Support/reply-ticket.controller";
import { UpdateTicketStatusController } from "../../Controllers/Support/update-ticket-status.controller";
import { CloseTicketController } from "../../Controllers/Support/close-ticket.controller";

const supportRoutes: Router = Router();

// ── anti-spam: limita quantos tickets/respostas um utilizador pode abrir/
// enviar em pouco tempo, sem depender de moderação manual
const createTicketLimiter = limiterMiddleware(
  "Você atingiu o limite de tickets abertos. Tente novamente mais tarde.",
  10, // janela em minutos
  5,  // máx. 5 tickets a cada 10 minutos
  "support-create-ticket"
);
const replyTicketLimiter = limiterMiddleware(
  "Você está enviando mensagens rápido demais. Tente novamente em instantes.",
  10,
  20, // máx. 20 respostas a cada 10 minutos
  "support-reply-ticket"
);

// Private — Authenticated user (cliente)
supportRoutes.route("/support/tickets").post(
  MiddlewareAuthorization.authorization,
  createTicketLimiter,
  (req: Request, res: Response) => { CreateTicketController.create(req as RequestWithCredentials, res) }
);
supportRoutes.route("/support/tickets/mine").get(
  MiddlewareAuthorization.authorization,
  (req: Request, res: Response) => { GetMyTicketsController.get(req as RequestWithCredentials, res) }
);

// Private — dono do ticket OU admin (ownership validado dentro do service)
supportRoutes.route("/support/tickets/:id_ticket").get(
  MiddlewareAuthorization.authorization,
  (req: Request, res: Response) => { GetTicketController.get(req as RequestWithCredentials, res) }
);
supportRoutes.route("/support/tickets/:id_ticket/messages").post(
  MiddlewareAuthorization.authorization,
  replyTicketLimiter,
  (req: Request, res: Response) => { ReplyTicketController.reply(req as RequestWithCredentials, res) }
);
supportRoutes.route("/support/tickets/:id_ticket/close").patch(
  MiddlewareAuthorization.authorization,
  (req: Request, res: Response) => { CloseTicketController.close(req as RequestWithCredentials, res) }
);

// Private — Admin
supportRoutes.route("/support/tickets").get(
  MiddlewareAuthorization.authorization,
  MiddlewareAuthorization.isAdmin,
  (req: Request, res: Response) => { GetAllTicketsController.getAll(req, res) }
);
supportRoutes.route("/support/tickets/:id_ticket/status").patch(
  MiddlewareAuthorization.authorization,
  MiddlewareAuthorization.isAdmin,
  (req: Request, res: Response) => { UpdateTicketStatusController.update(req, res) }
);

export { supportRoutes };
