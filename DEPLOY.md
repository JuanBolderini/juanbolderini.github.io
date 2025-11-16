# 🚀 Guia de Deploy para GitHub Pages

## 📋 Configuração Inicial

O projeto já está conectado ao GitHub:
- **Repositório**: `https://github.com/JuanBolderini/meu-portifolio.git`
- **Branch**: `master`

## 🎯 Opções de Deploy

### Opção 1: GitHub Actions (Recomendado - Automático)

O projeto já está configurado com GitHub Actions! 

**Como funciona:**
1. Toda vez que você fizer `git push` para a branch `master`, o GitHub Actions automaticamente:
   - Instala dependências
   - Faz o build do projeto
   - Faz deploy para GitHub Pages

**Para ativar:**
1. Vá em **Settings** do repositório no GitHub
2. Vá em **Pages** no menu lateral
3. Em **Source**, selecione **GitHub Actions**
4. Faça commit e push das mudanças:

```bash
git add .
git commit -m "Migração para React e configuração GitHub Pages"
git push origin master
```

### Opção 2: Deploy Manual com gh-pages

Se preferir fazer deploy manual:

```bash
# Instalar gh-pages (já está no package.json)
npm install

# Fazer build e deploy
npm run deploy
```

## ⚙️ Configuração do Base Path

O projeto está configurado para funcionar em:
- **URL do GitHub Pages**: `https://juanbolderini.github.io/meu-portifolio/`

Se o nome do repositório for diferente, ajuste em `vite.config.js`:

```js
base: process.env.NODE_ENV === 'production' ? '/NOME-DO-REPO/' : '/'
```

## 📝 Passos para Deploy

### 1. Preparar arquivos

```bash
# Adicionar todos os arquivos novos
git add .

# Fazer commit
git commit -m "Migração para React - Nova versão do portfólio"

# Push para GitHub
git push origin master
```

### 2. Ativar GitHub Pages

1. Acesse: `https://github.com/JuanBolderini/meu-portifolio/settings/pages`
2. Em **Source**, selecione **GitHub Actions**
3. Salve

### 3. Verificar Deploy

- O deploy automático será executado em: `https://github.com/JuanBolderini/meu-portifolio/actions`
- Após alguns minutos, seu site estará em: `https://juanbolderini.github.io/meu-portifolio/`

## 🔧 Troubleshooting

### Problema: Página em branco

**Solução**: Verifique se o `base` no `vite.config.js` está correto com o nome do repositório.

### Problema: Assets não carregam

**Solução**: Certifique-se de que os assets estão na pasta `public/` e os caminhos começam com `/assets/`.

### Problema: Rotas não funcionam

**Solução**: Adicione um arquivo `404.html` que redirecione para `index.html` (já configurado no build do Vite).

## 📌 Notas Importantes

1. **Primeiro Deploy**: Pode levar até 10 minutos para o GitHub Pages ativar
2. **Atualizações**: Após cada push, o deploy automático leva ~2-5 minutos
3. **Build Local**: Sempre teste com `npm run build` antes de fazer push
4. **Preview Local**: Use `npm run preview` para testar o build localmente

## 🎉 Pronto!

Após seguir esses passos, seu portfólio React estará rodando no GitHub Pages!

