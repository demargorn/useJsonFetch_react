# Custom Hook

**Реализуем кастомный хук useJsonFetch, который позволяет с помощью fetch осуществлять HTTP-запросы**

```
const [data, loading, error] = useJsonFetch(url, opts);

```

где:
-  data — данные, полученные после response.json();
-  error — ошибка: ошибка сети, ошибка ответа, если код не 20x, ошибка парсинга, если пришёл не JSON;
-  loading — boolean флаг, сигнализирующий о том, что загрузка идёт.

Backend проекта находится в каталоге backend.
