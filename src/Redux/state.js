import taskReducer from "./taskReducer";

let store = {
    _state: {
        tasksPage: {
            tasks:
            [
                {taskName: "Виконати цей додаток", id:"1"},
                {taskName: "Знайти цей додаток", id:"2"},
                {taskName: "Створити цей таск", id:"3"},
                {taskName: "Видалити цей таск", id:"4"}
            ],
            newText: "Напишіть ваш новий таск",
            taskDone: 0
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("DOM has been changed");
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        taskReducer(this._state.tasksPage, action);
        this._callSubscriber(this._state);
    }
}

window.store = store;

export default store;