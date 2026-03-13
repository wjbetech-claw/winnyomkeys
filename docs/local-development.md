# Local development

## Setup

```bash
git clone https://github.com/wjbetech-claw/winnyomkeys.git
cd winnyomkeys
npm ci
npm run dev
```

Open <http://localhost:3000>.

## Common commands

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run validate
```

## Troubleshooting

### Fresh install issues

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build issues after metadata or route changes

```bash
npm run typecheck
npm run build
```

Most issues should surface clearly through those commands.
