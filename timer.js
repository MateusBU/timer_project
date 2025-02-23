const schedule = require('node-schedule');

//in each 5 seconds execute
// starting at 17 hours
// every year
// every month
// on Sunday
const task1 = schedule.scheduleJob('*/5 * 17 * * 0', function(){
    console.log('Executing task 1!', new Date().getSeconds());
});

setTimeout(function(){
    task1.cancel('Canceling task 1!')
}, 20000) //after 20 seconds the task will cancel


const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(0, 5)]; //Sunday until Friday will happen
rule.hour = 17
rule.second = 30 //when the watch is 17 hours and 30 seconds, task will be executed

const task2 = schedule.scheduleJob(rule, function(){
    console.log('Executing task 2!', new Date().getSeconds());
});

