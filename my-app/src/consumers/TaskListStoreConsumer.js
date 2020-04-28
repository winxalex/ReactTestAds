import { StoreContext } from '../store/Store';

export default function TaskListStoreConsumer({ group, ...rest }) {

    return (


        <div>
            <StoreContext.Consumer>
                {
                    ({ getState, reducer: { setSession, createTask }, apply }) => <TaskList tasks={
                        getState().tasks.filter(
                            task => task.group === group.id
                        )}
                        createTaskItem={() => apply(createTask, group)}

                        test={() => apply(setSession)

                        }
                        {...rest} />
                }
            </StoreContext.Consumer>
        </div>
    )
}