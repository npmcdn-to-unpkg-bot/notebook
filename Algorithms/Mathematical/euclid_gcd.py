def gcd(u, v):
    if (u == 0 or v == 0):
        raise Exception("Cannot calculate gcd given zero")
    t = None
    while u != 0:
        if u < v:
            t = u
            u = v
            v = t
        u -= v
    gcd = v

    return gcd

if __name__ == '__main__':
    import unittest

    class Test_GCD(unittest.TestCase):
        def test_gcd(self):
            self.assertEqual(gcd(24, 18), 6, "Should calulate the correct gcd.")
            self.assertEqual(gcd(50, 45), 5, "Should calulate the correct gcd.")
            self.assertEqual(gcd(150, 350), 50, "Should calulate the correct gcd.")
            self.assertRaises(Exception, gcd, 0, 14)
            self.assertRaises(Exception, gcd, 10, 0)
            self.assertEqual(gcd(17, 12), 1, "Should return 1 if the numbers share no common denominator")
            self.assertEqual(gcd(37, 123), 1, "Should return 1 if the numbers share no common denominator")

    unittest.main()
