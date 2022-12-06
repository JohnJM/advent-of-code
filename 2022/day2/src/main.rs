use std::collections::HashMap;
mod parser;

fn main() {
    let part1_map: HashMap<&str, u32> = HashMap::from([
        ("A X", 4),
        ("A Y", 8),
        ("A Z", 3),
        ("B X", 1),
        ("B Y", 5),
        ("B Z", 9),
        ("C X", 7),
        ("C Y", 2),
        ("C Z", 6),
    ]);
    let part2_map: HashMap<&str, u32> = HashMap::from([
        ("A X", 3),
        ("A Y", 4),
        ("A Z", 8),
        ("B X", 1),
        ("B Y", 5),
        ("B Z", 9),
        ("C X", 2),
        ("C Y", 6),
        ("C Z", 7),
    ]);
    let input = parser::get_input_as_vec();
    let mut part1 = 0;
    let mut part2 = 0;
    for line in input.iter() {
        part1 += part1_map.get(line.as_str()).unwrap();
        part2 += part2_map.get(line.as_str()).unwrap();
    }
    println!("part 1: {}", part1);
    println!("part 2: {}", part2);
}
