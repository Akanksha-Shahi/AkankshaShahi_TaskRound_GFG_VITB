import { Challenge } from '../types';

export const challenges: Challenge[] = [
  {
    id: 1,
    title: 'Two Sum',
    difficulty: 'Easy',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers that add up to target.',
    starterCode: `function twoSum(nums, target) {\n  // Write your solution here\n}`,
    example: `Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: Because nums[0] + nums[1] == 9, we return [0, 1].`
  },
  {
    id: 2,
    title: 'Valid Parentheses',
    difficulty: 'Medium',
    description: 'Given a string s containing just the characters "(", ")", "{", "}", "[" and "]", determine if the input string is valid.',
    starterCode: `function isValid(s) {\n  // Write your solution here\n}`,
    example: `Input: s = "()[]{}"\nOutput: true\nExplanation: The brackets are properly closed and matched.`
  },
  {
    id: 3,
    title: 'Merge K Sorted Lists',
    difficulty: 'Hard',
    description: 'You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.',
    starterCode: `function mergeKLists(lists) {\n  // Write your solution here\n}`,
    example: `Input: lists = [[1,4,5],[1,3,4],[2,6]]\nOutput: [1,1,2,3,4,4,5,6]\nExplanation: The linked-lists are merged in sorted order.`
  },
  {
    id: 4,
    title: 'Maximum Subarray',
    difficulty: 'Medium',
    description: 'Given an integer array nums, find the subarray with the largest sum, and return its sum.',
    starterCode: `function maxSubArray(nums) {\n  // Write your solution here\n}`,
    example: `Input: nums = [-2,1,-3,4,-1,2,1,-5,4]\nOutput: 6\nExplanation: The subarray [4,-1,2,1] has the largest sum 6.`
  },
  {
    id: 5,
    title: 'Palindrome Number',
    difficulty: 'Easy',
    description: 'Given an integer x, return true if x is a palindrome, and false otherwise.',
    starterCode: `function isPalindrome(x) {\n  // Write your solution here\n}`,
    example: `Input: x = 121\nOutput: true\nExplanation: 121 reads as 121 from left to right and from right to left.`
  }
];