// import { useIsFetching } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCreateTodo, useDeleteTodo, useUpdateTodo } from '../services/mutation';
import { useTodos, useTodosIds } from '../services/queries';
import { Todo } from '../types/todo';

export default function Todos() {
  const todosIdsQuery = useTodosIds();
  const todosQueries = useTodos(todosIdsQuery.data);

  const createTodoMutation = useCreateTodo();
  const updateTodoMutations = useUpdateTodo();
  const deleteTodoMutation = useDeleteTodo();

  const { register, handleSubmit } = useForm<Todo>();

  const handleCreateTodoSubmit: SubmitHandler<Todo> = (data) => {
    createTodoMutation.mutate(data);
  };

  const handleMarkAsDoneSubmit = (data: Todo | undefined) => {
    if (data) {
      updateTodoMutations.mutate({ ...data, checked: true });
    }
  };

  const handleDeleteTodo = async (id: number) => {
    await deleteTodoMutation.mutateAsync(id);
  }
  //   const isFetching = useIsFetching();

  //   if (todosIdsQuery.isPending) {
  //     return <span>Loading...</span>;
  //   }

  //   if (todosIdsQuery.isError) {
  //     return <span>There is an error!</span>;
  //   }

  return (
    <>
      <form onSubmit={handleSubmit(handleCreateTodoSubmit)}>
        <h4>New todo:</h4>
        <input placeholder='Title' {...register('title')} />
        <input placeholder='Description' {...register('description')} />
        <br />
        <input
          type='submit'
          disabled={createTodoMutation.isPending}
          value={createTodoMutation.isPending ? 'Creating...' : 'Create todo'}
        />
      </form>
      {/* <p>Query function status: {todosIdsQuery.fetchStatus}</p>
    <p>Query data status: {todosIdsQuery.status}</p>
    <p>Global  isFetching: {isFetching}</p> */}
      {/* {todosIdsQuery.data?.map((id) => (
        <p key={id}>id: {id}</p>
      ))} */}

      <ul>
        {todosQueries.map(({ data }) => (
          <li key={data?.id}>
            <span>
              <strong>Title:</strong> {data?.title}
              <strong>Description:</strong> {data?.description}
            </span>
            <div>
              <button onClick={() => handleMarkAsDoneSubmit(data)}>
                {data?.checked ? 'Done' : 'Mark as done'}
              </button>
              {data && data?.id && ( <button onClick={() => handleDeleteTodo(data.id!)}>Delete</button>)}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
