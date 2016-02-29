# NoSQL Trade-Offs

## Understanding Partitioning

Database partitioning is splitting data across multiple database servers. It is done by a consistent method, so you always know where the data is. There are several partitioning methods you can use:

1. **Ranges:** If you had a database organized alphabetically then splitting A-L, M-Q, R-Z.

2. **List:** If you had database organized by category you could split them that way. (e.g Books > textbooks, cookbooks, sci-fi, etc.)

3. **Hashes:** A function returning a value to determine membership.

Reasons to partition include: store limitations, performance, or availability. On the other hand, a reason not to partition would be your dataset being small, in doing so would increase complexity unnecessarily.


Partitioning in Relational databases and NoSQL databases are similar:

<table>
  <tr>
    <th>Relational</th>
    <th>NoSQL</th>
  </tr>
  <tr>
    <td><strong>Relational</strong> databases can be partitioned <em>horizontally</em>, making rows into partitions, or <em>vertically</em>, making columns partitions.</td>  
    <td>Partitioning in non-relational databases depends on type. <strong>Key/Value</strong> and <strong>Document</strong> databases are typically partitioned <em>horizontally</em>, where <strong>Tabular</strong> databases can be horizontally or <em>vertically</em> partitioned.</td>
  </tr>
</table>


---

## Understanding the CAP Theorem

The CAP Theorem centers around three desirable properties:

1. Consistency: All users get the same data, no matter where they read it from.

2. Availability: Users can always read and write from the database.

3. Partition Tolerance: Ensure the database works when divided across a network.


The Theorem state that at most, you could only guarantee two of the three properties simultaneously:

**AP**: Available, Partition Tolerant.

**CP**: Consistent, Partition-tolerant.

**CA**: Consistent, Available.

> **Note:** Not all of these properties are exclusive of each other.

Relational databases trend toward consistency and availability, where NoSQL databases trend towards partition-tolerant (many node branches constantly added and changing).
