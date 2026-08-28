# Roadmap — Features Futuras

Este documento organiza sugestões de evolução do produto em três horizontes:
**quick wins** (código já existe, só falta ligar/testar), **próximos passos**
(esforço médio, alto impacto) e **visão de longo prazo** (features novas de
um e-commerce maduro). Cada item indica o *porquê* e, quando fizer sentido, o
que já existe no código que pode ser reaproveitado.

---

## 🟢 Quick wins (código já existe, só falta terminar)

Estes itens foram encontrados durante a auditoria: funcionalidades já
implementadas no backend mas não totalmente conectadas.

- [ ] **Expor os controllers de pagamento avulsos.** `cancell-payment`,
      `check-payment`, `find-payment`, `update-payment` e `register-payment`
      existem em `src/Controllers/Payments/` prontos, mas nenhuma rota os
      referencia. Dá para oferecer, por exemplo, `GET /payments/order/:id_order`
      (consultar status de pagamento) e `POST /payments/:id_payment/cancel`
      sem escrever lógica nova — só validar, ligar às rotas e escrever testes.
- [ ] **Reativar a rota de "tags por produto".**
      `GetAllTagsPerProductController` existe e está pronto; a rota
      correspondente está comentada em
      `src/Routes/Products/GeneralProducts/routes.ts`. Útil para a página de
      produto no frontend mostrar as tags relacionadas.
- [ ] **Limpar arquivos de upload após o envio ao Cloudinary.** Hoje o multer
      grava em `src/Common/Utils/Uploads/ProductImages/` e o serviço sobe para
      o Cloudinary, mas o arquivo local não é removido depois — em produção
      isso enche o disco aos poucos. Adicionar `fs.unlink` (ou um cron de
      limpeza) depois do upload confirmado.
- [ ] **Migrar o upload de disco local para memória (`multer.memoryStorage`) ou
      direto para um bucket.** Hoje, se a API rodar em múltiplas instâncias
      atrás de um load balancer, o disco local de cada instância não é
      compartilhado — não chega a quebrar (o Cloudinary é o destino final),
      mas é um passo intermediário desnecessário e um ponto de falha a menos
      se for removido.
- [ ] **Testes de integração para checkout completo.** A suíte atual só cobre
      autenticação. Adicionar testes para
      `carrinho → pedido → cupão → payment intent → webhook` (incluindo casos
      de concorrência) fecha o maior buraco de cobertura do projeto.

---

## 🟡 Próximos passos (esforço médio, alto impacto)

### Catálogo e descoberta
- [ ] **Busca full-text de produtos** (Postgres `tsvector`/`pg_trgm`, ou
      Meilisearch/Typesense/Algolia se o catálogo crescer). Hoje a listagem
      de produtos não tem busca por texto livre.
- [ ] **Filtros e facetas** (preço, categoria, marca, avaliação, disponível
      em estoque) na listagem pública de produtos.
- [ ] **Produtos relacionados / "quem comprou também levou"** — dá para
      começar simples (mesma categoria) e evoluir para recomendação real.
- [ ] **Paginação por cursor** nas listagens de alto volume (hoje é
      `page`/`limit` — funciona bem até o catálogo crescer muito).

### Checkout e pagamentos
- [ ] **Mais de um método de pagamento simultâneo por loja** — hoje o enum
      `PaymentMethods` já contempla `cash`, `card`, `transfer`, `paypal`,
      `stripe`, mas só o fluxo Stripe está implementado de ponta a ponta.
- [ ] **Cálculo de frete dinâmico** (por região/peso/transportadora) —
      hoje `shipping_*` só guarda o endereço, sem cálculo de custo de envio.
- [ ] **Carrinho abandonado**: job periódico que identifica carrinhos
      inativos há X horas e dispara e-mail de recuperação.
- [ ] **Reembolso parcial/total pelo admin**, com atualização de estoque e
      geração de nota de crédito — hoje só existe o evento `charge.refunded`
      mencionado na documentação, sem fluxo de admin para iniciar o reembolso.
- [ ] **Parcelamento** (se fizer sentido para o mercado-alvo).

### Notificações e comunicação
- [ ] **E-mails transacionais além de reset de senha**: confirmação de
      pedido, atualização de status de envio, "seu pedido chegou".
- [ ] **Notificações push/SMS** para status de pedido (opcional, depende do
      público).
- [ ] **Central de notificações in-app** para o usuário ver seu histórico de
      updates sem depender só de e-mail.

### Operação e administração
- [ ] **Dashboard de métricas mais rico**: hoje existe
      `GET /admin/dashboard`, mas dá para evoluir com gráficos de
      receita/tempo, funil de conversão (visitas → carrinho → pedido → pago),
      produtos mais devolvidos, etc.
- [ ] **Exportação de relatórios** (CSV/Excel) de pedidos, produtos e
      usuários para o admin.
- [ ] **Gestão de estoque multi-armazém** — hoje o estoque é um único número
      por variante; lojas com mais de um centro de distribuição vão precisar
      de estoque por localização.
- [ ] **Histórico de alterações de preço** por produto/variante (útil para
      auditoria e para mostrar "menor preço dos últimos 30 dias", que já é
      exigência legal em alguns países).

### Observabilidade
- [ ] **Logger estruturado** (Winston/Pino) substituindo os `console.log`
      espalhados pelo código, com correlação por `request_id`.
- [ ] **Rastreamento de erros em produção** (Sentry ou similar).
- [ ] **Métricas de aplicação** (Prometheus/Grafana ou equivalente gerenciado)
      — latência por rota, taxa de erro, uso do rate limiter.

---

## 🔵 Visão de longo prazo

### Multi-tenant / marketplace
- [ ] Suporte a múltiplos vendedores (marketplace) — hoje o modelo assume uma
      única loja. Evoluir para marketplace implica repensar `Products`
      (dono do produto), `Orders` (split de pagamento entre vendedores) e
      permissões (um `user_type: seller` intermediário entre `client` e
      `admin`).

### Internacionalização
- [ ] **Multi-moeda** — hoje `Payments.currency` já existe no schema, mas o
      restante do sistema assume uma moeda fixa (ex.: cálculo de cupão,
      exibição de preço).
- [ ] **Multi-idioma** para descrições de produto, e-mails transacionais e
      mensagens de erro da API.
- [ ] **Cálculo de impostos por região** (ex.: IVA/VAT variável).

### Personalização e engajamento
- [ ] **Programa de fidelidade / cashback.**
- [ ] **Recomendações personalizadas** baseadas em histórico de compra e
      navegação (fora do escopo de "produtos relacionados" simples acima).
- [ ] **A/B testing de preços, banners e listagem de produtos.**

### Confiabilidade e escala
- [ ] **Fila de processamento assíncrono** (BullMQ sobre o Redis já existente,
      por exemplo) para e-mails, geração de relatórios e webhooks pesados —
      hoje tudo roda de forma síncrona dentro da requisição.
- [ ] **Cache de leitura** para catálogo (produtos, categorias, marcas) com
      invalidação por evento, reduzindo carga no Postgres em picos de tráfego
      (ex.: campanhas/Black Friday).
- [ ] **CDN para imagens** — o Cloudinary já resolve boa parte disso, mas
      vale revisar políticas de cache/transformação de imagem (thumbnails
      gerados sob demanda, WebP automático).
- [ ] **Estratégia de sharding/particionamento** para `Orders`/`SystemLogs`
      se o volume crescer muito (ambos tendem a crescer indefinidamente).

### Compliance
- [ ] **Painel de consentimento de cookies/LGPD-GDPR** no frontend, integrado
      com o `purgeByAccount` que já existe no backend.
- [ ] **Exportação de dados pessoais** (“direito à portabilidade”) — hoje só
      existe exclusão (hard delete), falta exportação estruturada dos dados
      do titular antes ou em vez da exclusão.
- [ ] **Trilha de auditoria imutável** para ações administrativas críticas
      (hoje os `SystemLogs` são apagáveis via `/system-logs/purge`; para
      compliance mais rígido, considerar um log append-only separado,
      sem rota de purge, para ações como promoção de admin e hard delete).

---

## Como priorizar

Sugestão de critério simples para decidir a ordem:

1. **Segurança/estabilidade antes de features novas** — sempre.
2. **Quick wins primeiro** — baixo custo, destrava valor que já foi pago
   (código já escrito).
3. Entre os itens de "próximos passos", priorizar o que remove fricção do
   **checkout** (é onde a receita é perdida se algo falha) antes de features
   de descoberta/engajamento.
4. Itens de "visão de longo prazo" só fazem sentido quando houver sinal real
   de demanda (ex.: multi-tenant só se houver interesse em virar
   marketplace; multi-moeda só se houver expansão internacional real).
