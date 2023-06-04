using System;

namespace LinkedListExample
{
    class Program
    {
        static Node? head;
        static void Main(string[] args)
        {
            head = new Node(1);
            head.next = new Node(2);
            head.next.next = new Node(3);

            System.Console.WriteLine(head);

            Node? temp = head;
            while (temp != null)
            {
                System.Console.WriteLine($"{temp.val}");
                temp = temp.next;
            }
        }
    }


    public class Node
    {
        public int val;
        public Node? next;

        public Node(int data)
        {
            val = data;
            next = null;
        }
    }
}