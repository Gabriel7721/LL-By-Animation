import { LinkedListOperations } from "./index";

/**
 * Independent ISO C99 teaching examples. Each exported sample contains the
 * shared definitions + the selected operation, so Copy works on its own.
 * A fixed 64-byte array represents the UI's string node values (e.g. "ABC").
 */
const setup = `#include <stddef.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define DATA_CAPACITY 64

typedef struct Node {
    char data[DATA_CAPACITY];
    struct Node *next;
} Node;

typedef struct LinkedList {
    Node *head;
    Node *tail;
    size_t size;
} LinkedList;

// Store at most 63 characters plus the terminating '\\0'.
Node *createNode(const char *value) {
    Node *node = malloc(sizeof *node);
    if (node == NULL) return NULL;
    snprintf(node->data, sizeof node->data, "%s", value);
    node->next = NULL;
    return node;
}
`;

const snippets: Record<LinkedListOperations, string> = {
  insertBack: `// O(1) because the list maintains a tail pointer.
int insertBack(LinkedList *list, const char *value) {
    Node *node = createNode(value);
    if (node == NULL) return 0;

    if (list->tail == NULL) {
        list->head = node;
    } else {
        list->tail->next = node;
    }
    list->tail = node;
    list->size++;
    return 1;
}`,
  insertFront: `// O(1): redirect head to the new node.
int insertFront(LinkedList *list, const char *value) {
    Node *node = createNode(value);
    if (node == NULL) return 0;

    node->next = list->head;
    list->head = node;
    if (list->tail == NULL) list->tail = node;
    list->size++;
    return 1;
}`,
  insertAt: `// 0-based index; index == size appends to the list.
int insertAt(LinkedList *list, size_t index,
             const char *value) {
    if (index > list->size) return 0;
    Node *node = createNode(value);
    if (node == NULL) return 0;

    if (index == 0) {
        node->next = list->head;
        list->head = node;
        if (list->tail == NULL) list->tail = node;
    } else {
        Node *previous = list->head;
        for (size_t i = 1; i < index; i++) {
            previous = previous->next;
        }
        node->next = previous->next;
        previous->next = node;
        if (node->next == NULL) list->tail = node;
    }
    list->size++;
    return 1;
}`,
  remove: `// Remove the first node whose data equals value.
int removeValue(LinkedList *list, const char *value) {
    Node *previous = NULL;
    Node *current = list->head;

    while (current != NULL) {
        if (strcmp(current->data, value) == 0) {
            if (previous == NULL) list->head = current->next;
            else previous->next = current->next;
            if (list->tail == current) list->tail = previous;
            free(current);
            list->size--;
            return 1;
        }
        previous = current;
        current = current->next;
    }
    return 0; // Value not found.
}`,
  removeAt: `// Remove the node at a 0-based index. O(n).
int removeAt(LinkedList *list, size_t index) {
    if (index >= list->size) return 0;
    Node *target;

    if (index == 0) {
        target = list->head;
        list->head = target->next;
    } else {
        Node *previous = list->head;
        for (size_t i = 1; i < index; i++) {
            previous = previous->next;
        }
        target = previous->next;
        previous->next = target->next;
        if (list->tail == target) list->tail = previous;
    }
    free(target);
    list->size--;
    if (list->size == 0) list->tail = NULL;
    return 1;
}`,
  removeFront: `// O(1): advance head and free the old node.
int removeFront(LinkedList *list) {
    if (list->head == NULL) return 0;
    Node *oldHead = list->head;
    list->head = oldHead->next;
    free(oldHead);
    list->size--;
    if (list->head == NULL) list->tail = NULL;
    return 1;
}`,
  removeBack: `// O(n): find the node before the tail.
int removeBack(LinkedList *list) {
    if (list->head == NULL) return 0;
    if (list->head == list->tail) {
        free(list->head);
        list->head = NULL;
        list->tail = NULL;
        list->size = 0;
        return 1;
    }

    Node *previous = list->head;
    while (previous->next != list->tail) {
        previous = previous->next;
    }
    free(list->tail);
    previous->next = NULL;
    list->tail = previous;
    list->size--;
    return 1;
}`,
  reverse: `// O(n) time, O(1) extra space.
void reverse(LinkedList *list) {
    Node *previous = NULL;
    Node *current = list->head;
    list->tail = list->head;

    while (current != NULL) {
        Node *next = current->next;
        current->next = previous;
        previous = current;
        current = next;
    }
    list->head = previous;
}`,
  updateData: `// Update an existing node's data without replacing it.
int updateData(LinkedList *list, size_t index,
               const char *value) {
    if (index >= list->size) return 0;
    Node *current = list->head;
    for (size_t i = 0; i < index; i++) {
        current = current->next;
    }
    snprintf(current->data, sizeof current->data,
             "%s", value);
    return 1;
}`,
  replace: `// Replace the entire node at index with a new node.
int replace(LinkedList *list, size_t index,
            const char *value) {
    if (index >= list->size) return 0;
    Node *replacement = createNode(value);
    if (replacement == NULL) return 0;

    Node *previous = NULL;
    Node *oldNode = list->head;
    for (size_t i = 0; i < index; i++) {
        previous = oldNode;
        oldNode = oldNode->next;
    }
    replacement->next = oldNode->next;
    if (previous == NULL) list->head = replacement;
    else previous->next = replacement;
    if (list->tail == oldNode) list->tail = replacement;
    free(oldNode);
    return 1;
}`,
  clear: `// C requires freeing every node: O(n), unlike dropping
// references in JavaScript (which has garbage collection).
void clear(LinkedList *list) {
    Node *current = list->head;
    while (current != NULL) {
        Node *next = current->next;
        free(current);
        current = next;
    }
    list->head = NULL;
    list->tail = NULL;
    list->size = 0;
}`,
  get: `// Read data at the given index, or NULL if invalid.
const char *get(const LinkedList *list, size_t index) {
    if (index >= list->size) return NULL;
    Node *current = list->head;
    for (size_t i = 0; i < index; i++) {
        current = current->next;
    }
    return current->data;
}`,
};

export const linkedListCSource = (operation: LinkedListOperations): string =>
  `${setup}\n${snippets[operation]}`;
