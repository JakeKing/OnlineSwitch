import sys, re, optparse
#
first_re = re.compile(r'^\d{3}$')

parser = optparse.OptionParser()
parser.set_defaults(debug=False,xls=False)
parser.add_option('--debug', action='store_true', dest='debug')
parser.add_option('--xls', action='store_true', dest='xls')
(options, args) = parser.parse_args()

if len(args) == 1:
    if first_re.match(args[0]):
        print "Primary argument is : ", args[0]
    else:
        raise ValueError("First argument should be ...")
elif len(args) > 1:
    raise ValueError("Too many command line arguments")

if options.debug:
    print 'debug flag'

if options.xls:
    print 'xls flag'
