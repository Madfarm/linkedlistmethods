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
    let temp: ListNode | null = head;

    if(!temp) return;

    while (temp.next != null){
        temp = temp.next;
    }

    temp.next = added;
}

function print(head: ListNode | null): string {
    let temp: ListNode | null = head;
    let output: string = "";

    while(temp != null){
        output += `${temp.data} -> `;
        temp = temp.next;
    }
    
    output += 'NULL';

    return output;
}


function recursiveReverse(node: ListNode | null): ListNode | null {
    if (node == null || node.next == null) return node;


    var rest: ListNode | null = recursiveReverse(node.next);
    node.next.next = node;
    node.next = null;

    

    return rest;
}

function iterativeReverse(head: ListNode): void {

}


let myNode =  new ListNode(1);
let head: ListNode | null = myNode;
insert(2);
insert(3);
insert(4);
insert(5);

console.log(print(head));
head = recursiveReverse(head);
console.log(print(head));
