# search.py
# ---------
# Licensing Information:  You are free to use or extend these projects for
# educational purposes provided that (1) you do not distribute or publish
# solutions, (2) you retain this notice, and (3) you provide clear
# attribution to UC Berkeley, including a link to http://ai.berkeley.edu.
#
# Attribution Information: The Pacman AI projects were developed at UC Berkeley.
# The core projects and autograders were primarily created by John DeNero
# (denero@cs.berkeley.edu) and Dan Klein (klein@cs.berkeley.edu).
# Student side autograding was added by Brad Miller, Nick Hay, and
# Pieter Abbeel (pabbeel@cs.berkeley.edu).


"""
In search.py, you will implement generic search algorithms which are called by
Pacman agents (in searchAgents.py).
"""

import util

class SearchProblem:
    """
    This class outlines the structure of a search problem, but doesn't implement
    any of the methods (in object-oriented terminology: an abstract class).

    You do not need to change anything in this class, ever.
    """

    def getStartState(self):
        """
        Returns the start state for the search problem.
        """
        util.raiseNotDefined()

    def isGoalState(self, state):
        """
          state: Search state

        Returns True if and only if the state is a valid goal state.
        """
        util.raiseNotDefined()

    def getSuccessors(self, state):
        """
          state: Search state

        For a given state, this should return a list of triples, (successor,
        action, stepCost), where 'successor' is a successor to the current
        state, 'action' is the action required to get there, and 'stepCost' is
        the incremental cost of expanding to that successor.
        """
        util.raiseNotDefined()

    def getCostOfActions(self, actions):
        """
         actions: A list of actions to take

        This method returns the total cost of a particular sequence of actions.
        The sequence must be composed of legal moves.
        """
        util.raiseNotDefined()


def tinyMazeSearch(problem):
    """
    Returns a sequence of moves that solves tinyMaze.  For any other maze, the
    sequence of moves will be incorrect, so only use this for tinyMaze.
    """
    from game import Directions
    s = Directions.SOUTH
    w = Directions.WEST
    return  [s, s, w, s, w, w, s, w]

def depthFirstSearch(problem):
    """
    Search the deepest nodes in the search tree first.

    Your search algorithm needs to return a list of actions that reaches the
    goal. Make sure to implement a graph search algorithm.

    To get started, you might want to try some of these simple commands to
    understand the search problem that is being passed in:
    """

    def has_no_neighbors(node, visited):
        neighbor_set = set([neighbor[0] for neighbor in problem.getSuccessors(node)])
        return neighbor_set.issubset(visited)

    def dfs(node, visited=set(), path=[]):
        if (node == problem.getStartState()):
            visited.add(node)
            current_coodinates = node
        else:
            current_coodinates = node[0]

        if (problem.isGoalState(current_coodinates)):
            return path

        if (not problem.isGoalState(current_coodinates) and has_no_neighbors(current_coodinates, visited)):
            return False

        for neighbor in problem.getSuccessors(current_coodinates):
            if neighbor[0] not in visited:
                path_copy = path[:]
                visited.add(neighbor[0])
                path_copy.append(neighbor[1])
                depth_search = dfs(neighbor, visited, path_copy)
                if depth_search:
                    return depth_search

    dfs_search = dfs(problem.getStartState())
    return dfs_search



def breadthFirstSearch(problem):

    # start = problem.getStartState()
    # neighbors = problem.getSuccessors(start)
    # print "\n==========\n"
    # print "The start is: {}".format(start)
    # print "The neighbors are: {}".format(neighbors)
    # print "The neighbors of 5, 4 are: {}".format(problem.getSuccessors(neighbors[0][0]))
    # print "\n==========\n\n\n"

    # while(we don't hit start node):
    #     follow map back from destination
    #     pushing directions along the way
    # {
    #     to: ((3, 4), 'South', 10)
    #     from: ((3, 3), 'North', 10)
    # }

    def bfs(root):
        queue = [root]
        visited = []
        backtrak = {}
        while(len(queue) > 0):
            next = queue.pop(0)
            if (next == root):
                coordinates = next
            else:
                coordinates = next[0]
            visited.append(coordinates)

            if (problem.isGoalState(coordinates)):
                return traceback(coordinates, backtrak)
            for neighbor in problem.getSuccessors(coordinates):
                if neighbor[0] not in visited:
                    queue.append(neighbor)
                    backtrak[neighbor[0]] = (coordinates, neighbor[1], 1)

    def traceback(endpoint, node_map):
        current_coords = endpoint
        current_direction = None;
        backtrace = []
        while (current_coords != problem.getStartState()):
            current_direction = node_map[current_coords][1]
            current_coords = node_map[current_coords][0]
            backtrace.append(current_direction)
        backtrace = backtrace[::-1]
        return backtrace

    bfs_search = bfs(problem.getStartState())
    return bfs_search


def uniformCostSearch(problem):
    """Search the node of least total cost first."""
    "*** YOUR CODE HERE ***"
    util.raiseNotDefined()

def nullHeuristic(state, problem=None):
    """
    A heuristic function estimates the cost from the current state to the nearest
    goal in the provided SearchProblem.  This heuristic is trivial.
    """
    return 0

def aStarSearch(problem, heuristic=nullHeuristic):
    """Search the node that has the lowest combined cost and heuristic first."""
    "*** YOUR CODE HERE ***"
    util.raiseNotDefined()

# Abbreviations
bfs = breadthFirstSearch
dfs = depthFirstSearch
astar = aStarSearch
ucs = uniformCostSearch
