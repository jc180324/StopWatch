//import * as Stopwatch from 'stopwatch'
 //Logger
 let s_log = Symbol(); 
class Logger{
  
       constructor()
       {
         this.logHTML = false;
         this[s_log] = '';
       }
  add(msg) {
    
   if (this.logHTML) this.logNode.innerHTML +=  msg + `</br>`;
  
    this[s_log] = this[s_log] + msg + "\n"; 


  }
  show() { alert(this[s_log]); }
  showHtml(id ='logDiv')
  {
    this.logHTML = true;
    this.logNode = document.getElementById('logDiv');
  }
  
}

function updateClock(watch) {
    document.getElementById('watchdisplay').innerHTML = 'Time passed: '+watch.toString();
}



//stopWatch Program Test
let log = new Logger();
class Program
{
  
    // "brute force" algorithm (iterative approach)
    static SimpleSumIntegerUpToLimit(limit)
    {
        let sum = 0;
        
        for (let count = 1; count <= limit; count++)
        {
            sum += count;
        }
        return sum;
    }

    // "clever" algorithm
    static CleverSumIntegerUpToLimit(limit)
    {
        return (limit * (limit + 1)) / 2;
    }

    static Main()
    {
        let limit;
        let result;
        debugger
        let stopWatch = new Stopwatch(updateClock,1);
        
        log.showHtml();
        
        limit = 10;
        stopWatch.start();
        result = this.SimpleSumIntegerUpToLimit(limit);
        stopWatch.stop();
        log.add(`Simple algorithm ${limit} is: ${result}`);
        log.add(`Time it took in seconds = ${stopWatch.Elapsed.seconds.toString()} and in milliseconds = ${stopWatch.Elapsed.milliseconds.toString()}`);
        
        stopWatch.reset();
        
        stopWatch.start();
        
        result = this.CleverSumIntegerUpToLimit(limit);
        
        stopWatch.stop();
        log.add(`Clever algorithm ${limit} is: ${result}`);
        log.add(`Time it took in seconds = ${stopWatch.Elapsed.seconds.toString()} and in milliseconds = ${stopWatch.Elapsed.milliseconds.toString()}`);

        stopWatch.reset();

        limit = 10;
        stopWatch.start();
        result = this.SimpleSumIntegerUpToLimit(limit);
        stopWatch.stop();
        log.add(`Clever algorithm ${limit} is: ${result}`);
        log.add(`Time it took in seconds = ${stopWatch.Elapsed.seconds.toString()} and in milliseconds = ${stopWatch.Elapsed.milliseconds.toString()}`);
        stopWatch.reset();
        
        stopWatch.start();
        result = this.CleverSumIntegerUpToLimit(limit);
        stopWatch.stop();
        log.add(`Clever algorithm ${limit} is: ${result}`);
        log.add(`Time it took in seconds = ${stopWatch.Elapsed.seconds.toString()} and in milliseconds = ${stopWatch.Elapsed.milliseconds.toString()}`);
        stopWatch.reset();

        limit = 100000;
        stopWatch.start();
        result = this.SimpleSumIntegerUpToLimit(limit);
        stopWatch.stop();
        log.add(`Simple algorithm ${limit} is: ${result}`);
        log.add(`Time it took in seconds = ${stopWatch.Elapsed.seconds.toString()} and in milliseconds = ${stopWatch.Elapsed.milliseconds.toString()}`);
        stopWatch.reset();
        
        stopWatch.start();
        result = this.CleverSumIntegerUpToLimit(limit);
        stopWatch.stop();
        log.add(`Clever algorithm ${limit} is: ${result}`);
        log.add(`Time it took in seconds = ${stopWatch.Elapsed.seconds.toString()} and in milliseconds = ${stopWatch.Elapsed.milliseconds.toString()}`);
        stopWatch.reset();

        limit = 1000000;   // to big for "clever" algorithm
        stopWatch.start();
        result = this.SimpleSumIntegerUpToLimit(limit);
        stopWatch.stop();
        log.add(`Simple algorithm ${limit} is: ${result}`);
        log.add(`Time it took in seconds = ${stopWatch.Elapsed.seconds.toString()} and in milliseconds = ${stopWatch.Elapsed.milliseconds.toString()}`);
        stopWatch.reset();
        
        stopWatch.start();
        result = this.CleverSumIntegerUpToLimit(limit);
        stopWatch.stop();
        log.add(`Clever algorithm ${limit} is: ${result}`);
        log.add(`Time it took in seconds = ${stopWatch.Elapsed.seconds.toString()} and in milliseconds = ${stopWatch.Elapsed.milliseconds.toString()}`);
        stopWatch.reset();
        
        log.add("Process Complete!");
        log.show();
    }
}

	
//This will start the example
let startExample = function() {

Program.Main();

}

$(startExample);
