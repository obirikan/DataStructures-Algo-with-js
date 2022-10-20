// stack with array

//palindrome
let letters=[]
let word='kelvin'
let rword=''

for (let i = 0; i < word.length; i++) {
    let c=letters.push(word[i])
    
}

for (let i = 0; i < word.length; i++) {
    rword +=letters.pop()
}

//stack

var Stack=function (){
    this.count=0;
    this.storage={};

    this.push=(value)=>{
     this.storage[this.count]=value
     this.count+=1
    }

    this.pop=()=>{
     if(this.count===0){
        return undefined
       }
     this.count--;
     let result=this.storage[this.count]
      delete this.storage[this.count]
     return result
    }

    this.size=()=>{
        return this.count
    }

    this.peek=()=>{
        return this.storage[this.count-1]
    }
}

let stack=new Stack()
stack.push('kay')
stack.push('blay')
stack.push('ray')
console.log(stack.pop())
console.log(stack.peek())


