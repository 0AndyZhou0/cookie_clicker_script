files = [
    'clicker.js',
    'singles.js',
    'santa.js'
]

with open('combined.js', 'w') as outfile:
    for fname in files:
        with open(fname) as infile:
            for line in infile:
                outfile.write(line)
            outfile.write('\n\n')