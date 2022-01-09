import React, { Component } from "react";
import "./index.css";

export default class KanbanBoard extends Component {
	constructor() {
		super();
		// Each task is uniquely identified by its name.
		// Therefore, when you perform any operation on tasks, make sure you pick tasks by names (primary key) instead of any kind of index or any other attribute.
		this.state = {
			tasks: [
				{ name: "1", stage: 0 },
				{ name: "2", stage: 0 },
			],
			inputValue: "",
		};
		this.stagesNames = ["Backlog", "To Do", "Ongoing", "Done"];
	}

	onInputChange = input => {
		this.setState({ inputValue: input.target.value });
	};

	addTask = () => {
		if (this.state.inputValue) {
			const tasks = [...this.state.tasks];
			tasks.push({ name: this.state.inputValue, stage: 0 });
			this.setState({ tasks, inputValue: "" });
		}
	};

	backward = name => {
		const tasks = this.state.tasks.map(task => {
			if (task.name == name)
				return { name: task.name, stage: task.stage == 0 ? 0 : task.stage - 1 };
			else return task;
		});
		this.setState({ tasks });
	};

	forward = name => {
		const tasks = this.state.tasks.map(task => {
			if (task.name == name)
				return { name: task.name, stage: task.stage == 3 ? 3 : task.stage + 1 };
			else return task;
		});
		this.setState({ tasks });
	};

	removeTask = name => {
		let tasks = this.state.tasks.filter(task => task.name != name);
		this.setState({ tasks });
	};

	render() {
		const { tasks } = this.state;

		let stagesTasks = [];
		for (let i = 0; i < this.stagesNames.length; ++i) {
			stagesTasks.push([]);
		}
		for (let task of tasks) {
			const stageId = task.stage;
			stagesTasks[stageId].push(task);
		}

		return (
			<div className="mt-20 layout-column justify-content-center align-items-center">
				<section className="mt-50 layout-row align-items-center justify-content-center">
					<input
						value={this.state.inputValue}
						onChange={this.onInputChange}
						id="create-task-input"
						type="text"
						className="large"
						placeholder="New task name"
						data-testid="create-task-input"
					/>
					<button
						onClick={this.addTask}
						type="submit"
						className="ml-30"
						data-testid="create-task-button"
					>
						Create task
					</button>
				</section>

				<div className="mt-50 layout-row">
					{stagesTasks.map((tasks, i) => {
						return (
							<div className="card outlined ml-20 mt-0" key={`${i}`}>
								<div className="card-text">
									<h4>{this.stagesNames[i]}</h4>
									<ul className="styled mt-50" data-testid={`stage-${i}`}>
										{tasks.map((task, index) => {
											return (
												<li className="slide-up-fade-in" key={`${i}${index}`}>
													<div className="li-content layout-row justify-content-between align-items-center">
														<span
															data-testid={`${task.name.split(" ").join("-")}-name`}
														>
															{task.name}
														</span>
														<div className="icons">
															<button
																disabled={task.stage == 0}
																onClick={() => this.backward(task.name)}
																className="icon-only x-small mx-2"
																data-testid={`${task.name
																	.split(" ")
																	.join("-")}-back`}
															>
																<i className="material-icons">arrow_back</i>
															</button>
															<button
																disabled={task.stage == 3}
																onClick={() => this.forward(task.name)}
																className="icon-only x-small mx-2"
																data-testid={`${task.name
																	.split(" ")
																	.join("-")}-forward`}
															>
																<i className="material-icons">arrow_forward</i>
															</button>
															<button
																onClick={() => this.removeTask(task.name)}
																className="icon-only danger x-small mx-2"
																data-testid={`${task.name
																	.split(" ")
																	.join("-")}-delete`}
															>
																<i className="material-icons">delete</i>
															</button>
														</div>
													</div>
												</li>
											);
										})}
									</ul>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
