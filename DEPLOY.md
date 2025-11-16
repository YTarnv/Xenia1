# Инструкции по деплою на GitHub Pages

## Шаг 1: Отправка кода в GitHub

**Если вы внесли правки в код**, сначала добавьте их в коммит:

```bash
# Проверить статус изменений
git status

# Добавить все измененные файлы
git add .

# Создать коммит с описанием изменений
git commit -m "Описание ваших изменений"
```

Затем выполните команду для отправки кода (потребуется аутентификация GitHub):

```bash
git push -u origin main
```

Если у вас не настроена аутентификация, используйте один из способов:

### Вариант A: Personal Access Token
1. Создайте Personal Access Token на GitHub: Settings → Developer settings → Personal access tokens → Tokens (classic)
2. При запросе пароля используйте токен вместо пароля

### Вариант B: SSH ключ
```bash
git remote set-url origin git@github.com:YTarnv/Xenia1.git
git push -u origin main
```

## Шаг 2: Деплой на GitHub Pages

После успешного push выполните:

```bash
npm run deploy
```

Эта команда:
- Соберет проект (`npm run build`)
- Создаст ветку `gh-pages` с собранными файлами
- Отправит её в репозиторий

## Шаг 3: Настройка GitHub Pages

1. Перейдите в настройки репозитория: https://github.com/YTarnv/Xenia1/settings
2. В разделе **Pages** (слева в меню):
   - **Source**: выберите `Deploy from a branch`
   - **Branch**: выберите `gh-pages` и папку `/ (root)`
   - Нажмите **Save**

## Шаг 4: Доступ к сайту

После настройки (может занять 1-2 минуты) ваш сайт будет доступен по адресу:

**https://ytarnv.github.io/Xenia1/**

## Обновление сайта

При каждом изменении кода:
1. Сделайте коммит и push:
   ```bash
   git add .
   git commit -m "Описание изменений"
   git push
   ```

2. Запустите деплой:
   ```bash
   npm run deploy
   ```

Сайт обновится автоматически через несколько минут.

