import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ratingSchema } from '../../types/ratingsType';
import type { z } from 'zod';
import { useAppDispatch } from '@/shared/lib/hooks';
import { rateMovie } from '../../lib/ratingsThunk';

type FormData = z.infer<typeof ratingSchema>;

const RatingForm = ({ filmId }: { filmId: number }): React.JSX.Element => {
  const { register, handleSubmit, setValue } = useForm<FormData>({
    resolver: zodResolver(ratingSchema),
    defaultValues: { filmId },
  });

  /* Release 7 */
  /* Здесь получить dispatch с помощью useAppDispatch */

  const onSubmit = (data: FormData): void => {
    /* Release 7 */
    /* Здесь вызвать rateMovie  */
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('rating')}
        type="number"
        min="1"
        max="10"
        onChange={(e) => setValue('rating', Number(e.target.value))}
      />
      <button type="submit">Оценить</button>
    </form>
  );
};

export default RatingForm;
