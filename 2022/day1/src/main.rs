mod input2;
use std::str::FromStr;
use std::vec::Vec;

fn sort_vec<A, T>(vec: A) -> A
where
    A: AsMut<[T]> + Clone,
    T: Ord,
{
    let mut vec = vec.clone();
    let slice = vec.as_mut();
    slice.sort();
    vec
}

fn count_calories() -> Vec<u32> {
    let mut calories = 0;
    let mut calories_list: Vec<u32> = Vec::new();
    for num in input2::INPUT.iter() {
        match num {
            &"" => {
                calories_list.push(calories);
                calories = 0;
            }
            _ => {
                calories += u32::from_str(num).unwrap();
            }
        }
    }
    sort_vec(calories_list)
}

fn main() {
    let calories_list: Vec<u32> = count_calories();
    let len: usize = calories_list.len();
    let part2: u32 = calories_list[len - 1] + calories_list[len - 2] + calories_list[len - 3];

    println!("part 1: {}",  calories_list[len - 1]);
    println!("part 2: {}", part2);
}