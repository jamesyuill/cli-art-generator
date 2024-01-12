use rand::Rng;
use std::io;

fn main() {
    println!("give me four random characters? eg: '9/~e': ");
    let mut input = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("failed to read line");

    for _n in 0..20 {
        for _x in 0..40 {
            let mut rng = rand::thread_rng();
            let num: u8 = rng.gen_range(0..4);

            match num {
                0 => print!("{}", input.chars().nth(0).unwrap()),
                1 => print!("{}", input.chars().nth(1).unwrap()),
                2 => print!("{}", input.chars().nth(2).unwrap()),
                _ => print!("{}", input.chars().nth(3).unwrap()),
            }
        }
        println!("");
    }
}
