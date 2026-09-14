# VÉLORA — GitHub Pages demo

Uma loja de roupas responsiva, publicada como site estático. O carrinho, favoritos, busca, catálogo, cupom visual e pedido de demonstração funcionam localmente no navegador usando `localStorage`.

## Executar

```bash
npm install
npm run dev
npm run build
npm run preview
```

## O que este deploy faz — e o que não faz

GitHub Pages só hospeda arquivos estáticos. Por isso esta versão **não** processa pagamentos, não armazena dados de clientes, não usa Supabase Auth e não expõe área administrativa. O checkout sinaliza de maneira explícita que está em demonstração. Não coloque chaves em variáveis `VITE_*` que deveriam ficar secretas.

## Produção: requisitos obrigatórios

Para vender de verdade, use um backend (Supabase Edge Functions, Vercel Functions ou equivalente) e siga esta sequência:

1. Crie projeto Supabase e preencha somente `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` no frontend.
2. Mantenha `PAYMENT_ACCESS_TOKEN` e `PAYMENT_WEBHOOK_SECRET` exclusivamente no ambiente do backend. Para Brasil, Mercado Pago é uma opção adequada; use preferência/checkout hospedado ou tokenização do provedor, nunca cartão/CVV no banco.
3. No servidor, recalcule preço, frete e cupom a partir de IDs; crie o pedido pendente; valide assinatura de webhook; só então marque-o pago e baixe o estoque em transação.
4. Ative RLS: produtos públicos; perfis, endereços, favoritos, carrinhos e pedidos somente do `auth.uid()`; operações de preço, estoque, cupom e pedidos pagos somente por função administrativa/service role no servidor.
5. Crie `profiles.role` com padrão `customer`. Promova administradores apenas por painel/backoffice protegido ou SQL privilegiado; nunca por cliente.

## Modelo de dados mínimo

Crie `profiles`, `addresses`, `categories`, `products`, `product_variants`, `favorites` (unique `user_id,product_id`), `cart_items`, `orders`, `order_items`, `coupons`, `coupon_usages` e `newsletter_subscribers`, todos com chaves estrangeiras, timestamps, índices e RLS. Use UUID para entidades de usuário/pedido. Mantenha snapshots de nome, SKU e preço em `order_items`.

## LGPD e burocracia antes de lançar

Os textos em `/politica-privacidade`, `/termos`, `/trocas` e `/entrega` são modelos editáveis, não parecer jurídico. Antes de coletar dados ou vender: identifique controlador/CNPJ/canais; defina bases legais e retenção; implemente registro de consentimento para cookies/newsletter; contrato de operador com fornecedores; processo para direitos dos titulares; medidas de segurança e plano de incidentes; política de troca/arrependimento, oferta e atendimento revisados para sua operação. Obtenha revisão jurídica especializada.

## Personalização

Edite `src/data.ts` para substituir produtos demonstrativos, preços, imagens, SKUs e categorias. A identidade fica principalmente em `src/styles.css`. As URLs de imagens são referências de demonstração e devem ser substituídas por fotos próprias/licenciadas antes do lançamento.

## Deploy

O workflow em `.github/workflows/deploy-pages.yml` publica cada push em `main`. No repositório, selecione **Settings → Pages → Build and deployment → GitHub Actions** se necessário. O `base: './'` permite abrir a SPA também no domínio `github.io/<repositório>/`.
