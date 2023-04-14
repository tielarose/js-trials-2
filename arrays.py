def print_indices(items):
    """Print each item in the list, followed by its index.

    The output should look like this:
        apple 0
        berry 1
        cherry 2

    Arguments:
        items (list)

    Returns:
        None
    """

    for i in range(len(items)):
        print(f'{items[i]} {i}')


def every_other_item(items):
    """Print a list of every other item in `items`

    Start with index 0.

    Arguments:
        items (list)
    """

    result = []

    for i in range(len(items)):
        if i % 2 == 0:
            result.append(items[i])

    print(result)