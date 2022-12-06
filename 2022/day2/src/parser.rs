use std::fs::File;
use std::io::{self, BufRead};
use std::path::Path;
use std::vec::Vec;

fn read_lines<P>(filename: P) -> io::Result<io::Lines<io::BufReader<File>>>
where
    P: AsRef<Path>,
{
    let file = File::open(filename)?;
    let lines = io::BufReader::new(file).lines();
    Ok(lines)
}

pub fn get_input_as_vec() -> Vec<String> {
    let mut list: Vec<String> = Vec::new();
    let input = read_lines("src/input");
    for (_i, line) in input.expect("input required").enumerate() {
        let line = line.ok().expect("input required");
        list.push(line);
    }
    
}
