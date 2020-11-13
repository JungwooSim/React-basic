import React, {Component} from 'react';
import Habit from "./habit";

class Habits extends Component {
    state = {
        habits : [
            { id: 1, name: 'Reading', count: 0},
            { id: 2, name: 'Running', count: 0},
            { id: 3, name: 'Coding', count: 0},
        ]
    }

    handleIncrement = (habit) => {
        const habits = [...this.state.habits]; // habits를 복제
        const index = habits.indexOf(habit); // 매게변수로 받은 habit의 index를 넣음
        habits[index].count++;
        this.setState({habits}); // 수정된 habits를 다시 셋팅
    };

    handleDecrement  = (habit) => {
        const habits = [...this.state.habits]; // habits를 복제
        const index = habits.indexOf(habit); // 매게변수로 받은 habit의 index를 넣음
        const count = habits[index].count - 1;
        habits[index].count = count < 0 ? 0 : count;
        this.setState({habits}); // 수정된 habits를 다시 셋팅
    };
    handleDelete = (habit) => {
        const habits = this.state.habits.filter(item => item.id !== habit.id); // habits를 반복하며 매게변수로 받은 habit 이 아닌것만 골라서 habits에 넣음
        this.setState({habits}); // 그리고 habits를 재설정
    };
    render() {
        return (
            <ul>
                {
                    this.state.habits.map(habit => (
                        <Habit key={habit.id}
                               habit={habit}
                               onIncrement={this.handleIncrement}
                               onDecrement={this.handleDecrement}
                               onDelete={this.handleDelete}
                        />
                    ))
                }
            </ul>
        );
    }
}

export default Habits;
