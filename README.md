### Кинопоиск Exam

#### Общее описание:
Вам необходимо реализовать недостающие части кода, связанные с работой Redux Toolkit. В предоставленных файлах удалены фрагменты логики для работы со стором, асинхронными запросами и редьюсерами. Ваша задача — восстановить их.

---

### 1. Вывод списка фильмов на главной странице
**Цель:** Отобразить сетку популярных фильмов.  
**Файлы:**  
- `moviesSlice.ts`  
- `moviesThunk.ts`  
- `HomePage.tsx` 

**Задачи:**  
- В `moviesThunk.ts` реализуйте асинхронный thunk `fetchTopMovies` для запроса к API (используйте `getTopMovies` из `kinopoisk.ts`).
- В `moviesSlice.ts` добавьте обработку состояний для `fetchTopMovies` в `extraReducers`.
- В `HomePage.tsx` Восстановите получение dispatch и получите данные из хранилища.

---

### 2. Переход на страницу фильма
**Цель:** Реализовать загрузку данных о фильме при переходе на его страницу.  
**Файлы:**  
- `moviesSlice.ts`  
- `moviesThunk.ts`  
- `MoviePage.tsx`

**Задачи:**  
- В `moviesThunk.ts` реализуйте thunk `fetchMovieDetails` для получения деталей фильма по ID.
- В `moviesSlice.ts` добавьте обработку состояний для `fetchMovieDetails` в `extraReducers`.
- В `MoviePage.tsx` Восстановите получение dispatch и получите данные из хранилища.

---

### 3. Добавление в избранное
**Цель:** Реализовать добавление/удаление фильма из избранного.  
**Файлы:**  
- `favoritesSlice.ts`  
- `favoritesThunk.ts`  
- `MovieCard.tsx`

**Задачи:**  
- В `favoritesThunk.ts` реализуйте thunks `addFavorite` и `removeFavorite` для работы с API.
- В `favoritesSlice.ts` добавьте обработку экшенов в `extraReducers`.
- В `MovieCard.tsx` Настройте обработчики для добавления в избранное.

---

### 4. Вывод избранных фильмов
**Цель:** Отобразить список избранных фильмов на отдельной странице.  
**Файлы:**  
- `favoritesSlice.ts`  
- `favoritesThunk.ts`  
- `MovieCard.tsx`
- `FavoritesPage.tsx`

**Задачи:**  
- В `favoritesThunk.ts` реализуйте thunk `fetchFavorites` для загрузки избранного.
- В `favoritesSlice.ts` добавьте селектор `selectIsFavorite`.
- В `MovieCard.tsx` Восстановите получение dispatch и получите данные из хранилища. Реализуйте проверку наличия фильма в избранном.
- В `FavoritesPage.tsx` Восстановите получение dispatch и получите данные из хранилища. Реализуйте отображение списка избранных фильмов.

---

### 5. Удаление избранных фильмов
**Цель:** Реализовать удаление фильма из списка избранных.  
**Файлы:**  
- `favoritesSlice.ts`  
- `favoritesThunk.ts`  
- `MovieCard.tsx`

**Задачи:**  
- В `favoritesThunk.ts` реализуйте асинхронный thunk `removeFavorite` для DELETE-запроса к API.
- В `favoritesSlice.ts` добавьте обработку экшена `removeFavorite` в extraReducers.
- В `MovieCard.tsx` Настройте обработчики для удаления из избранного.

---

### 6. Реализация поиска
**Цель:** Добавить поиск фильмов по названию.  
**Файлы:**  
- `moviesSlice.ts`  
- `moviesThunk.ts`  
- `HomePage.tsx` 

**Задачи:**  
- В `moviesThunk.ts` реализуйте thunk `searchMoviesAsync` для поиска через API.
- В `moviesSlice.ts` обработайте действие `searchMoviesAsync` в `extraReducers`.
- В `HomePage.tsx` Восстановите получение dispatch и получите данные из хранилища. Реализуйте логику поискового запроса.

---

### 7. Работа с рейтингами
**Цель:** Сохранять оценку пользователя для фильма.  
**Файлы:**  
- `ratingsSlice.ts`  
- `ratingsThunk.ts`  
- `MoviePage.tsx`
- `RatingForm.tsx`

**Задачи:**  
- В `ratingsThunk.ts` реализуйте thunk `rateMovie` для отправки оценки на сервер.
- В `ratingsSlice.ts` обработайте действия `rateMovie` и `fetchUserRating`.
- В `MoviePage.tsx` Настройте отправку оценки
- В `RatingForm.tsx` Восстановите получение dispatch и вызвать `rateMovie` при нажатии на кнопку.

---

**Удачи!** Задание проверяет умение работать с Redux Toolkit, включая асинхронные операции, слайсы и интеграцию с React.