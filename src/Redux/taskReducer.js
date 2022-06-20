
const ADD_TASK = 'ADD-TASK',
      UPDATE_NEW_TASK_TEXT = 'UPDATE-NEW-TASK-TEXT',
      REMOVE_TASK = 'REMOVE-TASK',
      DONE_TASK = 'DONE-TASK';

const taskReducer = (state, action) => {
    switch (action.type) {
        case ADD_TASK:
            let newTask = {
                taskName: state.newText,
                id: 5
            };
            state.tasks.push(newTask);
            state.newText = '';
            return state;
        case UPDATE_NEW_TASK_TEXT:
            state.newText = action.newText;
            return state;
        case REMOVE_TASK:
            if(action.id <= 1) {
                state.tasks.splice(0, 1);
            }else {
                let removeIndex = state.tasks.indexOf(action.id);
                removeIndex = removeIndex - 1;
                state.tasks.splice(removeIndex, 1);
            }
            return state;
        case DONE_TASK:
            if(action.id <= 1) {
                state.tasks.splice(0, 1);
            }else {
                let addIndex = state.tasks.indexOf(action.id);
                addIndex = addIndex - 1;
                state.tasks.splice(addIndex - 1, 1);
            }
            state.taskDone += 1;
            return state;
        default:
            return state;
    }
}

export const addTaskCreator = () => ({type: ADD_TASK});
export const updateTaskTextCreator = (text) => ({type: UPDATE_NEW_TASK_TEXT, newText: text});
export const removeTaskCreator = (id) => ({type: REMOVE_TASK, id: id});
export const doneTaskCreator = (id) => ({type: DONE_TASK, id: id});

export default taskReducer;