
# Cookie Clicker Script
 A small cookie clicker script to add cookies at a set rate and amount.
 The original script can be found in my other antsyboi.github.io repository at /files/ccscript.js

# How to use
1. Open up the developer console on your browser of choice while in cookie clicker
2. Paste in the entire script from script.js
3. Run the function s2 with the amount of cookies per turn and the time in-between turns (in milliseconds)
4. Kill all running instances of s2 by setting "killswitch" to one
5. Run wipe() to reset all save data except name

# Example

	s2(200, 100) //Adds 200 cookies every 100 milliseconds
	killswitch = 1 // To stop all instances of s2
	killswitch = 0 // To allow use of s2 again
    wipe() // Wipes all save data

# Enjoy!