# Instructions for reproducing bugs

**READ THIS BEFORE YOU START:**

Although we do not require environment setup, we DO have the following three requirements:

1. You are on a Windows System
2. This webpage is opened with Chrome
3. One of the three GPUs is used as the primary GPU:
    - Intel(R) UHD Graphics 730
    - NVIDIA GeForce RTX 3060
    - AMD Radeon RX 6400

**Otherwise you may not see the rendering bugs.**

**Steps to reproduce the bugs:**

1. Select one of the 6 bugs from the dropdown list marked with "SELECT HERE".
2. Wait for several seconds (depending on the speed of your machine).

And that's it!

The shader source code of the corresponding bug will then be loaded
into the textarea marked with placeholder "Source of fused shader". The two shaders that are used to compose the fused shader are displayed in the middle.

The browser on your local machine will compile and execute the fused shader, and display the rendering
output image on the left. The expected output image is displayed on the right.

If you satisfy our three requirements, you would see that the rendering result is different from the expected one.
