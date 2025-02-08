# Custom Hook

**Реализуем кастомный хук useJsonFetch, который позволяет с помощью fetch осуществлять HTTP-запросы**

```
const [data, loading, error] = useJsonFetch(url, opts);

```
где:
-  data — данные, полученные после response.json();
-  loading — boolean флаг, сигнализирующий о том, что загрузка идёт.
-  error — ошибка: ошибка сети, ошибка ответа, если код не 20x, ошибка парсинга, если пришёл не JSON;

Backend проекта находится в каталоге backend.
