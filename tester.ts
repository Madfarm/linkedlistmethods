class ListNode {
    data: number;
    next: ListNode | null;

    constructor(data: number){
        this.data =  data;
        this.next = null;
    }


}


function insert(data: number): void {
    let added: ListNode = new ListNode(data);
    let temp: ListNode = head;

    while (temp.next != null){
        temp = temp.next;
    }

    temp.next = added;
}

function print(head: ListNode): string {
    let temp: ListNode | null = head;
    let output: string = "";

    while(temp != null){
        output += `${temp.data} -> `;
        temp = temp.next;
    }
    
    output += 'NULL';

    return output;
}


let myNode =  new ListNode(2);
let head = myNode;
insert(12);
insert(4);

console.log(print(head));
