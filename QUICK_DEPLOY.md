# 🚀 Deploy Rápido - GitHub Pages

## ✅ Status Atual

- ✅ Projeto conectado ao GitHub: `https://github.com/JuanBolderini/meu-portifolio.git`
- ✅ GitHub Actions configurado para deploy automático
- ✅ Base path configurado: `/meu-portifolio/`

## 📝 Passos para Atualizar o GitHub Pages

### 1. Fazer Commit das Mudanças

```bash
# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Migração para React - Nova versão do portfólio"

# Push para GitHub
git push origin master
```

### 2. Ativar GitHub Actions (Primeira vez)

1. Acesse: https://github.com/JuanBolderini/meu-portifolio/settings/pages
2. Em **Source**, selecione **GitHub Actions**
3. Salve as alterações

### 3. Verificar Deploy

- **Actions**: https://github.com/JuanBolderini/meu-portifolio/actions
- **Site**: https://juanbolderini.github.io/meu-portifolio/

## ⚡ Deploy Automático

A partir de agora, **toda vez que você fizer push** para a branch `master`, o GitHub Actions automaticamente:
1. Faz build do projeto
2. Faz deploy para GitHub Pages
3. Seu site é atualizado em ~2-5 minutos

## 🔧 Se o Nome do Repositório Mudar

Se o nome do repositório for diferente de `meu-portifolio`, atualize em `vite.config.js`:

```js
base: isProduction ? '/NOME-DO-REPO/' : '/',
```

## 📌 Importante

- O primeiro deploy pode levar até 10 minutos
- Deploys subsequentes levam ~2-5 minutos
- Sempre teste localmente com `npm run build` antes de fazer push

